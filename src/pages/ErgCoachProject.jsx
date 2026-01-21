import React from 'react';

const stats = [
  { label: 'Realtime Engine', value: 'WebSocket hub + Redis fan-out' },
  { label: 'UI Stack', value: 'React 18, Zustand store, Tailwind UI' },
  { label: 'Deployment', value: 'S3 static site fronted by CloudFront' },
  { label: 'Audience', value: 'Invite-only dashboards for coaches' },
];

const highlights = [
  'Lane-by-lane dashboards stream stroke rate, split deltas, and finish projections in under 200 ms thanks to a serverless WebSocket gateway.',
  'Pre-race configuration wizard captures heat numbers, crew assignments, target splits, and erg IDs so every tile is personalized before the starting buzzer.',
  'Sticky-note overlays ride on top of each lane card, piping in reminders and quick links pulled from the official regatta website so coaches stay synced with race control.',
  'Shared layouts keep the broadcast wall, tablet view, and mobile sideline mode in sync, with Zustand acting as the single source of truth.',
  'Offline-friendly caching snapshots the last known metrics so coaches can rewind data during post-race debriefs even if connectivity dips.',
];

const architecture = [
  {
    title: 'WebSocket Relay',
    description:
      'Telemetry simulators and connected ergs push JSON frames into an AWS API Gateway WebSocket API. A Lambda fan-out normalizes payloads, stamps timestamps, and publishes into Redis Streams so multiple coach devices can subscribe without duplication.',
  },
  {
    title: 'Coaching Workspace',
    description:
      'React pages use a shared Zustand store to coordinate timers, sticky notes, and heat selection. A command palette lets staff jump between heats, toggle layouts, and pin the most critical metrics.',
  },
  {
    title: 'CloudFront Delivery',
    description:
      'Build artifacts deploy to an S3 bucket with versioned objects. CloudFront handles TLS, signed URLs, and cache invalidations so private beta coaches load the tracker quickly on meet days.',
  },
];

const dataFlow = [
  {
    title: 'Pre-race setup',
    body: 'Coaches define heats, splits, and lane assignments. The data persists in DynamoDB and seeds both the control panel and broadcast layouts.',
  },
  {
    title: 'Race streaming',
    body: 'When a race starts, the WebSocket gateway broadcasts telemetry packets to all subscribed dashboards. Zustand reducers keep each widget synchronized without extra renders.',
  },
  {
    title: 'Sticky-note bridge',
    body: 'An integration service scrapes the official race site for updates, converts them into color-coded sticky notes, and injects them onto the active lane cards.',
  },
];

const ErgCoachProject = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-500 font-semibold">Case Study</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Erg Coach Race Tracker</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl">
            A real-time race companion for rowing programs. Coaches watch synchronized dashboards, configure heats before
            the whistle, and drop sticky-note reminders fueled by the official race website so crews hit their targets.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        <article className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why coaches rely on it</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {architecture.map((item) => (
            <article key={item.title} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="bg-gray-900 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-semibold mb-6">Race-day flow</h2>
          <div className="space-y-6">
            {dataFlow.map((item, index) => (
              <div key={item.title} className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-none w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 md:mb-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-100 mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-dashed border-emerald-300 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">CloudFront-hosted beta</h2>
            <p className="mt-2 text-gray-700">
              The tracker lives behind a private CloudFront distribution until the public coaching portal launches. Reach
              out if you want your team included in the next beta cohort.
            </p>
          </div>
          <a
            href="/under-construction"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 transition text-base font-semibold text-white"
          >
            Request access
          </a>
        </section>
      </div>
    </section>
  );
};

export default ErgCoachProject;
