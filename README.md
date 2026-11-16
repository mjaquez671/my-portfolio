# See it live

Work in progress can be seen on AWS [S3](http://mmendoza-portfolio-bucket.s3-website-us-east-1.amazonaws.com/). 

## Project Structure

```
src/
├── assets/         # Static images bundled with the app
├── data/           # Content and configuration for sections
├── layouts/        # Shared shells that wrap routed pages
├── pages/          # Top-level routed pages (Home, UnderConstruction)
└── sections/       # Presentational sections used inside pages
```

Sections consume data from `/src/data` so content changes stay separate from presentation, and routing now flows through `/src/pages` with a reusable layout for shared navigation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deploying to AWS

`scripts/deploy.sh` builds the site, uploads it to S3, and (optionally) clears the CloudFront cache.

### One-time setup

1. Install and sign in to the AWS CLI:

   ```
   brew install awscli
   aws configure
   ```

   The AWS user needs permission to list, upload, and delete objects in the bucket, and to create CloudFront invalidations if you use CloudFront.

2. Make client-side routes (such as `/projects/erg-coach`) work on refresh and direct links:
   - **S3 website hosting:** set both the index document and the error document to `index.html`.
   - **CloudFront:** add custom error responses for **403** and **404** that return `/index.html` with status **200**.

### Deploy

```
S3_BUCKET=your-bucket-name CF_DISTRIBUTION_ID=YOUR_DISTRIBUTION_ID bash scripts/deploy.sh
```

- `S3_BUCKET` (required): the bucket name, without `s3://`.
- `CF_DISTRIBUTION_ID` (optional): when set, the script invalidates the CloudFront cache so visitors get the new version right away. Leave it out to skip the CloudFront step.

Both values are read from environment variables so they never live in the repo. To avoid typing them each time, add them to `~/.zshrc`:

```
export S3_BUCKET=your-bucket-name
export CF_DISTRIBUTION_ID=YOUR_DISTRIBUTION_ID
```

What the script does:

1. Runs `npm run build` with warnings treated as errors.
2. Uploads `build/static` (hashed JS/CSS) with a one-year cache.
3. Uploads everything else (`index.html`, the resume PDF, etc.) with `no-cache`, so updates show up immediately.
4. Invalidates CloudFront (`/*`) if `CF_DISTRIBUTION_ID` is set.

**Note:** both uploads use `--delete`, so anything in the bucket that isn't in the build is removed.

### Deploying with GitHub Actions

`.github/workflows/deploy.yml` runs the same script automatically. There are two sites, and the branch you push to decides which one is published:

| Branch | GitHub environment | Publishes to |
|---|---|---|
| `release/mario` | `mario` | Mario's S3 bucket and CloudFront distribution |
| `release/kate` | `kate` | Kate's S3 bucket and CloudFront distribution |

To publish, merge or push into the matching release branch. You can also run it manually from the **Actions** tab by choosing a release branch. The job signs in to AWS with OIDC, so no AWS access keys are stored in GitHub.

**The workflow file and `scripts/deploy.sh` must exist on each release branch**, because GitHub runs the version of the workflow on the branch that was pushed.

One-time setup:

1. **In AWS IAM**, add GitHub as an identity provider (URL `https://token.actions.githubusercontent.com`, audience `sts.amazonaws.com`), then create a role for each site (or one role for both) that:
   - trusts that provider, limited to this repository and that site's environment. Because the job uses a GitHub environment, the token's subject is environment-based: `repo:<owner>/<repo>:environment:mario` or `repo:<owner>/<repo>:environment:kate`;
   - has permission to list, upload, and delete objects in that site's bucket, and to create invalidations on that site's distribution.
2. **In the GitHub repo**, under **Settings → Environments**, create two environments, `mario` and `kate`. In each one:
   - under **Deployment branches**, allow only its release branch (`release/mario` or `release/kate`), so a site can only be published from its own branch;
   - add these secrets and variable:

   | Name | Type | Value |
   |---|---|---|
   | `AWS_ROLE_ARN` | Secret | The ARN of that site's role from step 1 |
   | `S3_BUCKET` | Secret | That site's bucket name |
   | `CF_DISTRIBUTION_ID` | Secret | That site's CloudFront distribution ID |
   | `AWS_REGION` | Variable | That bucket's region, e.g. `us-east-1` |

Secrets are masked in the Actions logs, so bucket names and IDs don't appear in the output.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
