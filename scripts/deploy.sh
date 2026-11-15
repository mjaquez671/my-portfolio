#!/usr/bin/env bash
# Build the site and publish it to S3.
#
# Usage:
#   S3_BUCKET=your-bucket-name ./scripts/deploy.sh
#   S3_BUCKET=your-bucket-name CF_DISTRIBUTION_ID=E123... ./scripts/deploy.sh   # also clears the CloudFront cache
#
# The bucket name and distribution ID come from environment variables so they never live in the repo.
set -euo pipefail

: "${S3_BUCKET:?Set S3_BUCKET to your bucket name}"

cd "$(dirname "$0")/.."

echo "Building..."
CI=true npm run build

echo "Uploading hashed assets (cached for a year)..."
aws s3 sync build/static "s3://${S3_BUCKET}/static" \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

echo "Uploading everything else (always revalidated)..."
aws s3 sync build "s3://${S3_BUCKET}" \
  --delete \
  --exclude "static/*" \
  --cache-control "no-cache"

if [[ -n "${CF_DISTRIBUTION_ID:-}" ]]; then
  echo "Invalidating CloudFront cache..."
  aws cloudfront create-invalidation --distribution-id "${CF_DISTRIBUTION_ID}" --paths "/*" > /dev/null
fi

echo "Done."
