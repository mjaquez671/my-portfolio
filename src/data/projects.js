import {
  aerospaceAdhesiveImage,
  ergCoachImage,
  myPortfolioImage,
  partyOnSiteImage,
  waveInvoiceImage,
} from '../assets/images';

const inProgressLink = '/under-construction';

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
