export const featuredProject = {
  title: 'Self-Hosted Household AI Assistant',
  link: '/projects/ai-assistant',
  summary:
    'A private Telegram assistant my wife and I use for our calendar, email, files, shopping lists, and day-to-day coordination, powered by a model running on my own hardware.',
  tags: ['Self-hosted LLM', 'Telegram bot', 'Google Calendar', 'Gmail', 'Google Drive', 'RAG', 'MCP', 'Docker', 'Network security'],
  highlights: [
    {
      label: 'Purpose',
      text: 'One shared assistant for the household, connected to Google Calendar, Gmail, and Google Drive, plus shopping lists and keeping plans in sync between the two of us. None of it goes to a cloud AI provider.',
    },
    {
      label: 'Inference',
      text: 'A 27B-parameter model (Qwen3.8 on llama.cpp with speculative decoding) on a Mac Studio at ~40–50 tokens/sec, serving a bot that runs in Docker on a separate Ubuntu server.',
    },
    {
      label: 'Memory',
      text: 'The latest milestone: long-term memory through a local embedding model and MuninnDB over MCP, so the assistant remembers preferences and decisions across conversations. Recall takes ~45 ms.',
    },
    {
      label: 'Security',
      text: 'Least privilege throughout: a single-port SSH tunnel with a restricted key, memory services bound to localhost, a firewall scoped to the Docker bridge, and secrets kept out of configs and logs.',
    },
  ],
};

export const projects = [
  {
    title: 'Party On Site Experience Builder',
    description:
      'Vite + React + TypeScript event hubs that hydrate from a Lambda-backed API, switch between bachelorette and bachelor themes, and export html-to-image weekend cards while keeping CTA, QR, and co-event flows in sync from DynamoDB.',
    link: '/projects/party-on-site',
    tags: ['React', 'TypeScript', 'Vite', 'AWS Lambda', 'DynamoDB'],
  },
  {
    title: 'ErgBoard',
    description:
      'A rowing platform that grew out of a race tracker. An iOS app programs Concept2 PM5 ergs over Bluetooth and streams results to a Lambda WebSocket for low-cost live tracking. Coaches run ad-hoc races, schedule practices that preset each athlete\'s workout, and review completed workouts through CSV-based analytics.',
    link: '/projects/erg-coach',
    tags: ['iOS', 'Bluetooth', 'AWS Lambda', 'WebSocket', 'Cognito', 'Vercel'],
  },
  {
    title: 'Wave Invoice Reminder System',
    description:
      'AWS Lambda plus Wave Invoice API automation that emails reminders for past-due and upcoming invoices using scheduled events and SMTP integration.',
    tags: ['Python', 'AWS Lambda', 'EventBridge', 'GraphQL', 'SMTP'],
  },
  {
    title: 'Aerospace Adhesive Tracking System',
    description:
      'Coin-cell sensor nodes about half an inch by an inch ride on each roll of adhesive, count down its out-time, calibrate themselves against the freezer, and report to a two-way master node that can reset or reassign them over the air. Two-year battery life, less scrap, and fewer recertifications.',
    link: '/projects/adhesive-tracker',
    tags: ['Arduino', 'ATtiny85', 'NRF24L01+', 'Low-power design', 'AWS IoT Core'],
  },
];
