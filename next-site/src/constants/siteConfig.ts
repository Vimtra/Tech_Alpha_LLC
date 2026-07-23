export const siteConfig = {
  name: 'Tech Alpha LLC',
  shortName: 'Tech Alpha',
  legalName: 'Tech Alpha LLC',
  tagline: 'DevOps & Cloud Consulting for the Enterprise',
  description:
    'Tech Alpha LLC is a DevOps and cloud computing consulting company delivering cloud strategy, DevOps engineering, IDC migration, managed ERP, and SAP services — with 24/7 proactive support and a dedicated technical consultant on every engagement.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.techalphallc.com',
  ogImage: '/opengraph-image',
  locale: 'en_US',
  themeColor: '#050816',
  keywords: [
    'Enterprise cloud consulting',
    'Cloud strategy',
    'DevOps',
    'CI/CD',
    'IDC migration',
    'Managed ERP',
    'SAP services',
    '24/7 proactive support',
    'McKinney TX',
    'Tech Alpha LLC',
  ],
  contact: {
    email: 'hr@techalphallc.com',
    phone: '+1 510 946 7863',
    phoneLink: 'tel:+15109467863',
    hours: '24/7 proactive support for active engagements',
    address: {
      street: '1402 S Custer Road, Suite 604',
      city: 'McKinney',
      region: 'TX',
      postalCode: '75072',
      country: 'US',
    },
  },
  socials: {} as Record<string, string>,
  organization: {
    foundingLocation: 'McKinney, Texas, United States',
    areaServed: 'Global',
    industry: 'Information Technology & Services',
  },
} as const

export type SiteConfig = typeof siteConfig
