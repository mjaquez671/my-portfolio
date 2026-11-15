import React from 'react';

const stats = [
  { label: 'Network', value: 'Nodes report to a two-way master node' },
  { label: 'Battery life', value: '~2 years on a CR2477X coin cell' },
  { label: 'Node size', value: '~0.5 × 1 in' },
  { label: 'Hardware', value: 'ATtiny85 + NRF24L01+ radio' },
];

const architecture = [
  {
    title: 'Sensor nodes',
    description:
      'Nodes about half an inch by an inch, one attached to each roll of adhesive. Each is built around an ATtiny85 and uses the chip\'s internal temperature sensor, running for about two years on a low-temperature CR2477X coin cell.',
  },
  {
    title: 'Master node',
    description:
      'Every node reports to a master node over NRF24L01+ radio. The link runs both ways: the master can send commands back to reset a node after its material is recertified, or update its thresholds when the node moves to a new roll.',
  },
  {
    title: 'Cloud and dashboards',
    description:
      'Data is uploaded to AWS IoT Core and stored in a database, which I prototyped, while Raspberry Pi dashboards on the floor give real-time visibility.',
  },
];

const flow = [
  { title: 'Sense', body: 'A node wakes up and reads the temperature of the adhesive it is tracking.' },
  { title: 'Track', body: 'Whenever the temperature is above that material\'s threshold, the material\'s remaining life hours count down, hour by hour.' },
  { title: 'Report', body: 'The node sends its reading and battery voltage to the master node over the NRF24L01+ radio, then goes back to sleep.' },
  { title: 'Collect', body: 'The master node uploads the data to AWS IoT Core, where it is stored in a database.' },
  { title: 'Display', body: 'Raspberry Pi dashboards show the current status in real time.' },
  { title: 'Update', body: 'When a roll is recertified or a node is moved to a new roll, the master node sends the reset or new thresholds back to that node over the same radio link.' },
];

const decisions = [
  {
    title: 'Calibrating against the freezer',
    description:
      "The ATtiny85's internal temperature sensor keeps each node tiny and cheap, but it is imprecise out of the box. The freezers themselves are calibrated periodically, so I used the lowest temperature the freezer reaches as each node's reference point. Nodes calibrate themselves automatically and correct for drift over time, with no manual recalibration.",
  },
  {
    title: 'Reusable, remotely configured nodes',
    description:
      "Each material has its own temperature threshold and life hours. Because the master node can talk back to the nodes, a node can be reset after recertification or reassigned to a new roll with new thresholds over the air, without being opened up or reprogrammed. One design covers every adhesive.",
  },
  {
    title: 'Two years on a coin cell',
    description:
      'Nodes spend most of their time in a powered-down sleep and wake only to measure and transmit. A low-temperature-rated CR2477X cell keeps them running in the freezer for about two years.',
  },
  {
    title: 'Small enough to ride on the roll',
    description:
      'At roughly half an inch by an inch, a node travels with its roll of adhesive in and out of the freezer, so the measurement follows the material itself, not the room it happens to be in.',
  },
];

const results = [
  'Less scrapped material, because out-time is measured instead of estimated on the safe side.',
  'Less manual logging for the people handling the material.',
  'Fewer material recertifications.',
];

const AdhesiveTrackerProject = () => {
  return (
    <section className="py-12 bg-parchment min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-12">
          <p className="font-serif italic text-lg text-gold-dark">Case Study</p>
          <h1 className="font-serif text-4xl font-semibold text-ink mt-2">Aerospace Adhesive Tracking System</h1>
          <p className="mt-4 text-lg text-umber max-w-4xl">
            A low-power wireless sensor network that tracks adhesive
            out-time: how long temperature-sensitive aerospace adhesives spend above their storage temperature before
            they have to be used or discarded.
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

        <article className="bg-sand rounded-2xl shadow-sm p-8 mb-12 border border-clay/20">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-4">The problem</h2>
          <p className="text-umber leading-relaxed max-w-4xl">
            Aerospace adhesives have a limited out-time, the total time they can spend above storage temperature and
            still be used. Tracking it accurately is a compliance requirement: material that runs past its limit can't go
            into a part.
          </p>
          <p className="text-umber leading-relaxed max-w-4xl mt-4">
            Out-time was logged by hand, and the logs erred on the side of caution. A technician who forgot to record
            the time might write in 24 hours the next day to be safe. That kept parts compliant, but it used up
            material life that had never actually been spent, leading to early scrap and extra recertifications.
          </p>
          <p className="text-umber leading-relaxed max-w-4xl mt-4">
            The goal was to measure out-time automatically on every roll, so the record reflects what the material
            actually went through.
          </p>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {architecture.map((item) => (
            <article key={item.title} className="bg-sand rounded-xl p-6 shadow-sm border border-clay/20">
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{item.title}</h3>
              <p className="text-umber leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="bg-espresso rounded-2xl p-8 text-sand mb-12">
          <h2 className="font-serif text-2xl font-semibold text-parchment mb-6">From sensor to dashboard</h2>
          <div className="space-y-6">
            {flow.map((item, index) => (
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

        <h2 className="font-serif text-2xl font-semibold text-ink mb-6">Design decisions</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decisions.map((item) => (
            <article key={item.title} className="bg-sand rounded-xl p-6 shadow-sm border border-clay/20">
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{item.title}</h3>
              <p className="text-umber leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="bg-espresso rounded-2xl p-8 text-sand mt-12">
          <h2 className="font-serif text-2xl font-semibold text-parchment mb-4">Results</h2>
          <ul className="space-y-3">
            {results.map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed text-sand/85">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default AdhesiveTrackerProject;
