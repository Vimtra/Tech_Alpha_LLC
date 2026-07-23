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
    description:
      'Big Data and analytics solutions supporting financial strategy and portfolio planning.',
  },
  {
    name: 'Genentech',
    logo: '/clients/img-2.jpg',
    industry: 'Biotechnology',
    service: 'Data Center Solutions',
    description:
      'Data center architecture for the San Francisco-based Roche Group biotechnology company.',
  },
  {
    name: 'Blue Cross Blue Shield',
    logo: '/clients/img-3.jpg',
    industry: 'Healthcare',
    service: 'Quality Assurance',
    description:
      'Quality assurance and automation for the federation of U.S. health insurance organizations.',
  },
  {
    name: 'Airbnb',
    logo: '/clients/img-4.jpg',
    industry: 'Hospitality',
    service: 'Application Development',
    description:
      'Application development and microservices delivery for the global hospitality marketplace.',
  },
  {
    name: 'S&P Global',
    logo: '/clients/img-5.jpg',
    industry: 'Financial Publishing',
    service: 'Business Analysis',
    description:
      'Business analysis services supporting the New York-headquartered publicly traded corporation.',
  },
  {
    name: 'Toyota Motor Corporation',
    logo: '/clients/img-6.jpg',
    industry: 'Automotive',
    service: 'DevOps - CI/CD',
    description:
      'DevOps, continuous integration, and continuous delivery services for the multinational automotive manufacturer.',
  },
  {
    name: 'Virgin Atlantic',
    logo: '/clients/img-7.jpg',
    industry: 'Aviation',
    service: 'Application Microservices',
    description:
      'Application development and microservices for the British transatlantic airline.',
  },
  {
    name: 'Walmart Inc.',
    logo: '/clients/img-8.png',
    industry: 'Retail',
    service: 'Data Center - Cloud',
    description:
      'Data center solutions engineered for cloud platforms across the multinational retailer.',
  },
] as const