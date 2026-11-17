export const experience = [
  {
    company: 'JPMorgan Chase & Co.',
    title: 'Senior Software Engineer',
    dates: 'Jan 2025 – Present',
    highlights: [
      'Building the AWS platform for the on-prem-to-cloud rewrite of credit card payment services: ECS/Fargate, RDS, Lambda, EventBridge, and Route53 across a multi-AZ VPC with Terraform.',
      'Set the testing and engineering standards (component, end-to-end, and resiliency) adopted by 5 teams.',
      'Built Spinnaker and Jenkins pipelines with blue/green and canary releases; on call for SLA-backed payment services.',
    ],
  },
  {
    company: 'Carrier Global',
    title: 'Senior Software Engineer',
    dates: 'Aug 2022 – Jan 2025',
    highlights: [
      'Led the modernization of the air handling unit selection software behind every commercial AHU built in North America; owned the architecture and mentored ~6 engineers.',
      'Moved business logic from a JavaFX desktop client to Python Lambdas behind API Gateway in phases (strangler pattern), with a local cache and fallback so failures never blocked users.',
      'Containerized the manufacturing-output service and built Jenkins/JFrog CI/CD, cutting deployment time 75% (8 hours to 2).',
    ],
  },
  {
    company: 'Vertical Aerospace',
    title: 'Engineer, Automation & IoT',
    dates: 'May 2019 – Aug 2022',
    highlights: [
      'Built a .NET quality-inspection system that cut inspection cycle time from hours to minutes and prevented production rework.',
      'Designed a low-power RF sensor network with Raspberry Pi dashboards, and prototyped AWS IoT ingestion for the sensor data.',
    ],
  },
];

export const background = [
  { label: 'Education', value: 'B.S. Mechanical Engineering' },
  { label: 'Languages', value: 'English & Spanish (bilingual)' },
];
