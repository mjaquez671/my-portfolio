import React from 'react';

const stats = [
  { label: 'Apps', value: 'iOS app + two coach dashboards' },
  { label: 'Erg connection', value: 'Concept2 PM5 over Bluetooth' },
  { label: 'Live data', value: 'WebSocket on AWS Lambda' },
  { label: 'Auth & hosting', value: 'Amazon Cognito · Vercel + Lambda' },
];

const products = [
  {
    title: 'Race dashboard',
    description:
      'For ad-hoc racing. A coach sets the race parameters once and programs every erg at the same time, then watches the race unfold live as results stream in.',
  },
  {
    title: 'Scheduling dashboard',
    description:
      'For planned practice. Coaches onboard team members by email and schedule workouts. Each athlete gets a time window to start, the app presets the workout on their erg, and completed workouts come back as CSV for analytics.',
  },
];

const highlights = [
  'Program every erg at once: race parameters go to the PM5 monitors over Bluetooth from the iOS app, with no setting up each machine by hand.',
  'Low-cost live tracking: the app reports results to a WebSocket running on AWS Lambda, so the cost follows usage instead of an always-on server.',
  'Scheduled workouts with start windows: athletes start any time within the window the coach sets, and the workout is already loaded when they sit down.',
  'Email onboarding: coaches invite team members by email, with sign-in handled by Amazon Cognito.',
  'Athletes on several teams: an athlete can belong to multiple teams and choose which one to train or race with.',
  'Post-workout analytics: completed workouts are uploaded as CSV so coaches can review results and track progress.',
];

const raceFlow = [
  {
    title: 'Set up',
    body: 'The coach starts an ad-hoc race, or an athlete opens a scheduled workout within its start window.',
  },
  {
    title: 'Program the ergs',
    body: 'The iOS app connects to the PM5 monitors over Bluetooth and loads the race or workout parameters.',
  },
  {
    title: 'Stream',
    body: 'As athletes row, the app sends their results to the Lambda WebSocket.',
  },
  {
    title: 'Watch live',
    body: 'The coach dashboard updates in real time as results arrive.',
  },
  {
    title: 'Analyze',
    body: 'When the workout is done, the results are uploaded as CSV for coach analytics.',
  },
];

const ErgCoachProject = () => {
  return (
    <section className="py-12 bg-parchment min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-12">
          <p className="font-serif italic text-lg text-gold-dark">Case Study</p>
          <h1 className="font-serif text-4xl font-semibold text-ink mt-2">ErgBoard</h1>
          <p className="mt-4 text-lg text-umber max-w-4xl">
            A platform for rowing coaches and athletes that started as a race tracker. An iOS app programs Concept2 PM5
            ergs over Bluetooth and streams results for live tracking, and coaches use two dashboards: one for ad-hoc
            races and one for scheduling team practices.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-sand rounded-xl p-6 shadow-sm border border-clay/20">
              <p className="text-sm font-medium text-umber">{stat.label}</p>
              <p className="text-lg font-semibold text-ink mt-2">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.map((item) => (
            <article key={item.title} className="bg-sand rounded-xl p-6 shadow-sm border border-clay/20">
              <h2 className="font-serif text-2xl font-semibold text-ink mb-2">{item.title}</h2>
              <p className="text-umber leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <article className="bg-sand rounded-2xl shadow-sm p-8 mb-12 border border-clay/20">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-4">Highlights</h2>
          <ul className="list-disc list-outside pl-5 marker:text-clay text-umber space-y-3 leading-relaxed">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <section className="bg-espresso rounded-2xl p-8 text-sand mb-12">
          <h2 className="font-serif text-2xl font-semibold text-parchment mb-6">From setup to live results</h2>
          <div className="space-y-6">
            {raceFlow.map((item, index) => (
              <div key={item.title} className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-none w-12 h-12 rounded-full bg-gold text-espresso font-bold flex items-center justify-center mb-4 md:mb-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-parchment">{item.title}</h3>
                  <p className="text-sand/85 mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-sand border border-dashed border-clay/50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">See it live</h2>
            <p className="mt-2 text-umber">ErgBoard is running at ergboard.com.</p>
          </div>
          <a
            href="https://ergboard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold hover:bg-gold-light transition text-base font-semibold text-espresso"
          >
            Visit ergboard.com
          </a>
        </section>
      </div>
    </section>
  );
};

export default ErgCoachProject;
