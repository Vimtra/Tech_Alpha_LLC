export type Client = {
  name: string
  industry: string
  service: string
  description: string
  logo: string
}

export const clients: readonly Client[] = [
  {
    name: 'ORIX Corporation USA',
    logo: '/clients/img-1.png',
    industry: 'Financial Services',
    service: 'Big Data & Analytics',
    description: 'Big Data and analytics solutions to help them plan their financial strategies.',
  },
  {
    name: 'Genentech',
    logo: '/clients/img-2.png',
    industry: 'Biotechnology',
    service: 'Data Center Solutions',
    description:
      'A member of the Roche Group, a biotechnology company based in San Francisco, CA — supported with Data Center Solutions.',
  },
  {
    name: 'Blue Cross Blue Shield Association',
    logo: '/clients/img-3.png',
    industry: 'Healthcare',
    service: 'Quality Assurance',
    description:
      'A federation of 36 separate U.S. health insurance companies — supported with Quality Assurance Solutions.',
  },
  {
    name: 'Airbnb',
    logo: '/clients/img-4.png',
    industry: 'Hospitality',
    service: 'Application Development',
    description:
      'An American vacation rental online marketplace based in San Francisco — assisted with Application Development.',
  },
  {
    name: 'S&P Global',
    logo: '/clients/img-5.png',
    industry: 'Financial Publishing',
    service: 'Business Analysis',
    description:
      'An American publicly traded corporation headquartered in Manhattan, New York City — supported with Business Analysis.',
  },
  {
    name: 'Toyota Motor Corporation',
    logo: '/clients/img-6.png',
    industry: 'Automotive',
    service: 'DevOps - CI/CD',
    description:
      'A Japanese multinational automotive manufacturer — supported with DevOps, continuous integration, and continuous deployment services.',
  },
  {
    name: 'Virgin Atlantic',
    logo: '/clients/img-7.png',
    industry: 'Aviation',
    service: 'Application Microservices',
    description:
      'A British airline headquartered in Crawley, England — delivered Application Development Microservices.',
  },
  {
    name: 'Walmart Inc.',
    logo: '/clients/img-8.png',
    industry: 'Retail',
    service: 'Data Center - Cloud',
    description:
      'An American multinational retail corporation headquartered in Bentonville, Arkansas — helped deploy Data Center Solutions for their cloud platforms.',
  },
] as const
