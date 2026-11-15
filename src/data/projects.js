import {
  aerospaceAdhesiveImage,
  ergCoachImage,
  myPortfolioImage,
  partyOnSiteImage,
  waveInvoiceImage,
} from '../assets/images';

const inProgressLink = '/under-construction';

export const featuredProject = {
  title: 'Self-Hosted AI Assistant with Long-Term Memory',
  tags: ['LLM infrastructure', 'RAG', 'MCP', 'Docker', 'Linux/macOS', 'Network security'],
  highlights: [
    'Built a private, fully local AI assistant: a 27B-parameter LLM (Qwen3.8 on llama.cpp with speculative decoding, ~40–50 tokens/sec) on a Mac Studio, serving a Telegram bot that runs in Docker on a separate Ubuntu server.',
    'Added long-term semantic memory (RAG) using a local embedding model (Qwen3-Embedding, 1,024 dimensions) and a memory database (MuninnDB) exposed over the Model Context Protocol (MCP). Memories are recalled in ~45 ms and stay on the local network.',
    'Designed the network on least-privilege principles: an SSH tunnel whose key can only forward a single port, services bound to localhost, a firewall that only accepts traffic from the Docker bridge, and secrets read from files so they never appear in configs or logs.',
    "Cut the agent's tool-definition overhead by 55% (61 KB → 28 KB) by limiting it to a core tool set, so it fits within a 64K-token context window.",
    'Ran all components as auto-restarting system services (launchd and systemd), with checksum-verified installs, daily backups, and a step-by-step rollout with a test at each stage.',
    'Built with AI-assisted development (Claude Code). I directed the architecture and security decisions and audited each change before it went live.',
  ],
};

export const projects = [
  {
    title: 'My Portfolio',
    description:
      'Deep dive into this React + Tailwind portfolio including component architecture, data-driven sections, and the S3 + CloudFront deployment workflow that keeps the site fast worldwide.',
    link: '/projects/my-portfolio',
    image: myPortfolioImage,
  },
  {
    title: 'Party On Site Experience Builder',
    description:
      'Vite + React + TypeScript event hubs that hydrate from a Lambda-backed API, switch between bachelorette and bachelor themes, and export html-to-image weekend cards while keeping CTA, QR, and co-event flows in sync from DynamoDB.',
    link: '/projects/party-on-site',
    image: partyOnSiteImage,
  },
  {
    title: 'Erg Coach Race Tracker',
    description:
      'Real-time race tracker for athletic teams featuring WebSocket updates, detailed pre-race settings, synchronized dashboards for coaches, and sticky-note overlays tied to the official race site feed.',
    link: '/projects/erg-coach',
    image: ergCoachImage,
  },
  {
    title: 'Wave Invoice Reminder System',
    description:
      'AWS Lambda plus Wave Invoice API automation that emails reminders for past-due and upcoming invoices using scheduled events and SMTP integration.',
    link: inProgressLink,
    image: waveInvoiceImage,
  },
  {
    title: 'Aerospace Adhesive Tracking System',
    description:
      'Embedded telemetry with Arduino and NRF24L01+ to measure adhesive out-times, auto-calibrate drift, and stream data to AWS IoT Core for analytics.',
    link: inProgressLink,
    image: aerospaceAdhesiveImage,
  },
];
