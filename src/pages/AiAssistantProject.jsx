import React from 'react';

const stats = [
  { label: 'Chat model', value: 'Qwen3.8-27B (8-bit) on llama.cpp' },
  { label: 'Throughput', value: '~40–50 tokens/sec' },
  { label: 'Memory recall', value: '~45 ms' },
  { label: 'Hardware', value: 'Mac Studio (96 GB) + Ubuntu server' },
];

const uses = [
  { title: 'Google Calendar', body: 'Connected to our calendar, so plans and appointments are part of the conversation.' },
  { title: 'Gmail', body: 'Gmail integration, so the assistant can work with what arrives in the inbox.' },
  { title: 'Google Drive', body: 'Drive integration for the documents and notes we keep there.' },
  { title: 'Shopping & coordination', body: 'Shared shopping lists and day-to-day back-and-forth between my wife and me, in one place.' },
];

const reasons = [
  'Privacy: our calendar, email, and household details are never sent to a cloud AI provider.',
  'No per-token costs, no matter how much we use it.',
  'Full control over the model, the data, and how it all runs.',
];

const stack = 'Google Calendar, Gmail & Drive APIs · llama.cpp · Qwen3.8-27B · Qwen3-Embedding · MuninnDB · MCP · Docker · NanoClaw/OpenCode · SSH · launchd/systemd · iptables';

const messageFlow = [
  { title: 'Message in', body: 'A message from Telegram reaches the agent running in Docker on the Ubuntu server.' },
  { title: 'Tool decision', body: 'The model, running on the Mac Studio, decides whether the message needs memory, and calls a recall or remember tool if so.' },
  { title: 'Through the tunnel', body: 'The memory request travels over a single-port SSH tunnel to the memory database on the Mac Studio.' },
  { title: 'Recall', body: 'The database turns the text into a vector with the local embedding model and finds the closest memories.' },
  { title: 'Reply', body: 'Only those few snippets go back to the model, which writes the reply.' },
];

const memoryProblems = [
  'No memory: every new conversation started from scratch, so preferences, facts, and decisions had to be repeated.',
  "Context overflow: long conversations outgrew the model's 64K-token window, and requests failed.",
];

const constraints = [
  'Everything local. No cloud embedding APIs or hosted vector databases.',
  'No disruption to the live bot, which we use every day.',
  'Two machines: models on the Mac Studio, the bot in Docker on the Ubuntu server.',
  'The memory store holds personal information and must never be exposed to the network.',
];

const decisions = [
  {
    title: 'A separate embedding server',
    body: 'The existing model server keeps one model in memory at a time, so adding embeddings there would have meant reloading the 28 GB chat model on every lookup. A small dedicated server (~1 GB RAM) keeps both models loaded, isolates failures, and can be reused for document search later.',
  },
  {
    title: 'A memory database over a framework',
    body: 'Plain vector stores are mature but leave duplicates, recency, and decay to me. LLM-based frameworks (Mem0, Zep) add model calls to every message, which slows a local model. MuninnDB provides forgetting curves, association, and contradiction detection with ready-made MCP tools, but it is alpha software, so I run it as a time-boxed trial behind MCP where it can be swapped out without touching the bot.',
  },
  {
    title: 'Memory as tools, not automatic injection',
    body: 'The model decides when to recall or save, guided by its system prompt. That avoids a search on every "thanks 👍" and keeps unrelated memories out of the context. The trade-off is that recall depends on the model choosing to check.',
  },
  {
    title: 'Keeping the 27B model',
    body: 'I evaluated a ~125B mixture-of-experts model. Working through the memory budget showed only a 2-bit version would fit in 96 GB, and only by giving up the prompt cache. The 27B model at 8-bit is nearly lossless and more reliable at tool use.',
  },
];

const security = [
  'A dedicated SSH key the server restricts to forwarding one port to one local address. It cannot open a shell or run commands, and forwarding to any other port was tested and refused.',
  'The memory database and embedding server listen on localhost only. On the bot server, the tunnel endpoint binds only to the Docker bridge address.',
  'Linux accepts packets for a bridge IP on any interface, so a firewall rule blocks the tunnel port to everything except the container network.',
  'Access tokens live in permission-restricted files and are injected at runtime, so they never appear in configs, logs, prompts, or service definitions.',
  'Downloaded models and binaries were verified against published SHA-256 checksums, and the memory database’s default admin password was changed before first use.',
];

const challenges = [
  {
    problem: '45 tool definitions (61 KB) would take ~15K tokens of a 64K context.',
    fix: 'Found an undocumented per-client toolset header in the binary. A core set of 10 tools cut the overhead by 55%.',
  },
  {
    problem: '"localhost" inside a Docker container is not the host.',
    fix: 'Bound the tunnel to the Docker bridge and reached it through host.docker.internal.',
  },
  {
    problem: "The agent's built-in HTTP proxy broke plain-HTTP local traffic.",
    fix: 'Routed local MCP traffic around the proxy with NO_PROXY.',
  },
  {
    problem: 'The agent could read its own MCP config, including any token in it.',
    fix: 'Used file-based token substitution, so the token never sits in the config.',
  },
  {
    problem: 'Documentation was inconsistent about ports, auth, and defaults.',
    fix: 'Tested every claim against a throwaway instance before the real install.',
  },
];

const results = [
  'End-to-end memory works: the bot saved a fact on its own and recalled it accurately in a fresh conversation.',
  'Memory recall in ~45 ms, with chat speed unchanged.',
  'Zero network exposure for the memory and embedding services, verified from both the network and the container side.',
  'A light footprint: ~40 MB RAM for the memory database, ~1.6 GB for the embedding server.',
  'Services restart themselves (launchd/systemd) with daily backups, and memories survived forced restarts.',
];

const next = [
  'A one-week trial of what the bot chooses to remember and how reliably it recalls',
  'A "forget" capability',
  'Document search over PDFs and notes on the same embedding server',
];

const Card = ({ title, children }) => (
  <article className="bg-sand rounded-xl p-6 shadow-sm border border-clay/20">
    <h3 className="font-serif text-xl font-semibold text-ink mb-2">{title}</h3>
    <div className="text-umber leading-relaxed">{children}</div>
  </article>
);

const BulletList = ({ items }) => (
  <ul className="list-disc list-outside pl-5 marker:text-clay text-umber space-y-3 leading-relaxed">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const AiAssistantProject = () => {
  return (
    <section className="py-12 bg-parchment min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-12">
          <p className="font-serif italic text-lg text-gold-dark">Case Study</p>
          <h1 className="font-serif text-4xl font-semibold text-ink mt-2">Self-Hosted Household AI Assistant</h1>
          <p className="mt-4 text-lg text-umber max-w-4xl">
            A private assistant my wife and I message on Telegram for our calendar, email, files, shopping lists, and
            day-to-day coordination. It runs entirely on a model hosted on my own hardware, and its latest addition is long-term
            memory.
          </p>
          <p className="mt-4 text-sm text-umber max-w-4xl">
            <span className="font-semibold text-ink">Role:</span> architect and operator (AI-assisted build with Claude
            Code) · <span className="font-semibold text-ink">Stack:</span> {stack}
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

        <h2 className="font-serif text-3xl font-semibold text-ink mb-6">What it does</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {uses.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.body}
            </Card>
          ))}
        </section>
        <article className="bg-sand rounded-2xl shadow-sm p-8 mb-16 border border-clay/20">
          <h3 className="font-serif text-xl font-semibold text-ink mb-4">Why self-hosted</h3>
          <BulletList items={reasons} />
        </article>

        <section className="bg-espresso rounded-2xl p-8 text-sand mb-16">
          <h2 className="font-serif text-2xl font-semibold text-parchment mb-6">Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-10">
            <div className="rounded-xl border border-clay/30 p-5">
              <p className="font-serif italic text-gold">Telegram</p>
              <p className="text-sand/80 mt-1">My wife and I send messages</p>
            </div>
            <div className="rounded-xl border border-clay/30 p-5">
              <p className="font-serif italic text-gold">Ubuntu server</p>
              <p className="text-sand/80 mt-1">Bot and agents in Docker containers</p>
            </div>
            <div className="rounded-xl border border-gold/40 p-5">
              <p className="font-serif italic text-gold">Mac Studio</p>
              <ul className="text-sand/80 mt-1 space-y-1">
                <li>Chat model: Qwen3.8-27B (LAN, API key)</li>
                <li>Embedding model (localhost only)</li>
                <li>Memory DB: MuninnDB (localhost only)</li>
              </ul>
            </div>
          </div>
          <p className="text-sand/70 mb-8">
            Memory traffic travels from the bot to the Mac Studio over MCP through an SSH tunnel that forwards a single
            port with a restricted key.
          </p>
          <h3 className="font-serif text-xl font-semibold text-parchment mb-6">How a message is handled</h3>
          <div className="space-y-6">
            {messageFlow.map((item, index) => (
              <div key={item.title} className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-none w-12 h-12 rounded-full bg-gold text-espresso font-bold flex items-center justify-center mb-4 md:mb-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-parchment">{item.title}</h4>
                  <p className="text-sand/85 mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <h2 className="font-serif text-3xl font-semibold text-ink mb-2">Milestone: adding long-term memory</h2>
        <p className="text-lg text-umber max-w-4xl mb-8">
          The assistant worked well within a single conversation but forgot everything between them. The goal was to
          give it long-term memory without giving up privacy, cost, or control.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card title="The problem">
            <BulletList items={memoryProblems} />
          </Card>
          <Card title="Constraints">
            <BulletList items={constraints} />
          </Card>
        </section>

        <h3 className="font-serif text-2xl font-semibold text-ink mb-6">Key decisions and trade-offs</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {decisions.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.body}
            </Card>
          ))}
        </section>

        <article className="bg-sand rounded-2xl shadow-sm p-8 mb-12 border border-clay/20">
          <h3 className="font-serif text-2xl font-semibold text-ink mb-4">Security by design</h3>
          <BulletList items={security} />
        </article>

        <h3 className="font-serif text-2xl font-semibold text-ink mb-6">Challenges</h3>
        <section className="space-y-4 mb-12">
          {challenges.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 bg-sand rounded-xl p-6 border border-clay/20"
            >
              <p className="font-medium text-ink">{item.problem}</p>
              <p className="text-umber">{item.fix}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Results">
            <BulletList items={results} />
          </Card>
          <Card title="What's next">
            <BulletList items={next} />
          </Card>
        </section>
      </div>
    </section>
  );
};

export default AiAssistantProject;
