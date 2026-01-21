import React from 'react';

const stats = [
  { label: 'Frontend Stack', value: 'Vite, React 18, TypeScript, React Router 6' },
  { label: 'API & Storage', value: 'AWS Lambda + DynamoDB JSON payloads' },
  { label: 'Shareables', value: 'html-to-image weekend cards + QR modals' },
  { label: 'Hosting Ready', value: 'Static builds for S3/CloudFront, Netlify, or Vercel' },
];

const highlights = [
  'Configurable storytelling lets bachelorette and bachelor hosts update hero text, highlights, itinerary cards, and crew bios straight from DynamoDB without new deployments.',
  'Theme toggles drive an adaptive design system that remaps typography, gradients, and CTA treatments to match each crew\'s vibe while preserving accessibility contrast.',
  'Share-ready artifacts export hidden DOM nodes into PNG weekend cards and open QR-driven \"buy a drink\" flows with keyboard-friendly modals.',
  'Co-event awareness links paired weekend slugs (bachelorette <-> bachelor) so guests can bounce between itineraries without duplicating code.',
  'SEO metadata, smooth anchor routing, and slug-safe paths keep every event link sharable whether it starts on /event/:slug or /events/:slug.',
];

const architecture = [
  {
    title: 'Data Hydration Hook',
    description:
      'A custom usePartyInfo hook fetches JSON from VITE_EVENTS_API_BASE/<slug>, normalizes sparse fields with template defaults, and exposes typed slices (hero, itinerary, crew, drinkLinks) plus loading/error state.',
  },
  {
    title: 'Theme + Layout Orchestration',
    description:
      'useThemeClass pins the resolved palette (bachelorette or bachelor) across refetches while React Router surfaces hero, crew profile, and "buy a drink" routes that all read from the shared store.',
  },
  {
    title: 'Image & QR Pipeline',
    description:
      'useShareImage snapshots a hidden .share-previews node through html-to-image so attendees can download Instagram-ready weekend cards, and CTA sections hydrate QR codes or payment links on demand.',
  },
];

const dataFlow = [
  {
    title: 'Slug-aware Routing',
    details: 'Routes handle /, /event/:slug, /events/:slug, and nested bridesmaid/toast paths while deriving the correct API base and co-event prefixes.',
  },
  {
    title: 'Normalization & Safeguards',
    details: 'Template values backfill missing itinerary rows, payment providers, and crew ids so no UI state breaks when planners skip a field.',
  },
  {
    title: 'Experience Delivery',
    details: 'Hero, highlight grid, itinerary stack, CTA panels, QR modals, and crew bios all consume the normalized store, share metadata updates, and log hydration status for friendly skeleton states.',
  },
];

const PartyOnSiteProject = () => {
  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-10">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wide text-pink-600 font-semibold">Case Study</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Party On Site Experience Builder</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl">
            A themable event hub for parallel bachelorette and bachelor weekends. The app hydrates itself from a
            Lambda-backed API, keeps UI chrome in sync with the resolved theme, and gives crews shareable assets,
            from QR-coded "buy a drink" flows to downloadable weekend cards, all without redeploying.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        <article className="bg-gray-50 rounded-2xl shadow-inner p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why it resonates</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {architecture.map((item) => (
            <article key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data flow in practice</h2>
          <div className="space-y-6">
            {dataFlow.map((item, index) => (
              <div key={item.title} className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-none w-12 h-12 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center mb-4 md:mb-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 mt-1">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">See it live</h2>
            <p className="mt-2 text-gray-200">
              Explore the event catalog that powers these experiences, complete with live weekend slugs and crew content.
            </p>
          </div>
          <a
            href="https://events.devworx.us/events/2025-palm-springs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-400 transition text-base font-semibold text-white"
          >
            Visit Lena Monroe's Palm Springs Send-Off
          </a>
        </section>
      </div>
    </section>
  );
};

export default PartyOnSiteProject;
