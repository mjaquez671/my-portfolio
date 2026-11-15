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
  'Hero section with a typewriter-style intro and a featured latest-project showcase.',
  'Modular sections powered by separate data files for easy updates.',
  'Custom Tailwind theme: an earth-tone palette (espresso, umber, sand, gold) with Fraunces and Inter type.',
  'Reusable layout with sticky navigation and React Router pages.',
  'Optimized asset pipeline with shared image exports and lazy-friendly structure.',
];

const MyPortfolioProject = () => {
  return (
    <section className="py-12 bg-parchment min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-10">
          <p className="font-serif italic text-lg text-gold-dark">Case Study</p>
          <h1 className="font-serif text-4xl font-semibold text-ink mt-2">My Portfolio Platform</h1>
          <p className="mt-4 text-lg text-umber max-w-3xl">
            A single-page React application that showcases my work while doubling as a live demo of my
            front-end workflow, AWS hosting strategy, and continuous delivery approach.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <article className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-4">Feature Highlights</h2>
            <ul className="space-y-3 list-disc list-outside pl-5 marker:text-clay text-umber">
              {featureHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-4">Tech Snapshot</h2>
            <dl className="space-y-3 text-umber">
              <div>
                <dt className="font-medium text-ink">Framework</dt>
                <dd>React 18, React Router 6</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Styling</dt>
                <dd>Tailwind CSS, custom theme</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Build Tool</dt>
                <dd>create-react-app scripts</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Deployment</dt>
                <dd>S3 static site + CloudFront CDN</dd>
              </div>
            </dl>
          </article>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectureSteps.map((step) => (
            <article key={step.title} className="bg-white rounded-lg shadow-md p-6 border border-sand">
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-umber">{step.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default MyPortfolioProject;
