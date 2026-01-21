import {
  aerospaceAdhesiveImage,
  ergCoachImage,
  myPortfolioImage,
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
    title: 'Erg Coach Race Tracker',
    description:
      'Real-time race tracker for athletic teams featuring WebSocket updates, detailed pre-race settings, and synchronized dashboards for coaches.',
    link: inProgressLink,
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
