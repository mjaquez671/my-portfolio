import React from 'react';

const architectureSteps = [
  {
    title: 'Frontend Stack',
    description:
      'React (Create React App) with Tailwind CSS for styling, React Router for page structure, and reusable sections backed by JSON data.',
  },
  {
    title: 'Build & CI',
    description:
      'Create React App build artifacts are produced via npm scripts, then synced with AWS CLI in a CI workflow that also uploads static assets such as the resume PDF.',
  },
  {
    title: 'Hosting & CDN',
    description:
      'The compiled /build directory is deployed to an Amazon S3 static website bucket. An Amazon CloudFront distribution fronts the bucket, providing HTTPS, edge caching, and invalidations on each release.',
  },
  {
    title: 'Observability',
    description:
      'CloudFront access logs, S3 metrics, and synthetic uptime checks monitor delivery; each deploy posts status updates with the distribution ID and invalidation status.',
  },
];

const featureHighlights = [
  'Hero section with a typewriter-style intro and rotating role carousel.',
  'Modular sections powered by separate data files for easy updates.',
  'Tailwind utility classes plus lightweight custom CSS for animations.',
  'Reusable layout with sticky navigation and React Router pages.',
  'Optimized asset pipeline with shared image exports and lazy-friendly structure.',
];

const MyPortfolioProject = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">Case Study</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">My Portfolio Platform</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            A single-page React application that showcases my work while doubling as a live demo of my
            front-end workflow, AWS hosting strategy, and continuous delivery approach.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <article className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Feature Highlights</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              {featureHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Snapshot</h2>
            <dl className="space-y-3 text-gray-700">
              <div>
                <dt className="font-medium text-gray-900">Framework</dt>
                <dd>React 18, React Router 6</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Styling</dt>
                <dd>Tailwind CSS, custom animations</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Build Tool</dt>
                <dd>create-react-app scripts</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Deployment</dt>
                <dd>S3 static site + CloudFront CDN</dd>
              </div>
            </dl>
          </article>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectureSteps.map((step) => (
            <article key={step.title} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default MyPortfolioProject;
