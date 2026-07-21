export const siteConfig = {
  name: 'Tech Alpha LLC',
  shortName: 'Tech Alpha',
  legalName: 'Tech Alpha LLC',
  tagline: 'Cloud & AI Enterprise Solutions',
  description:
    'Tech Alpha LLC delivers secure cloud engineering, AI-powered innovation, DevOps excellence, and digital transformation for enterprise organizations. AWS-certified engineers, 24/7 proactive support.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.techalphallc.com',
  ogImage: '/opengraph-image',
  locale: 'en_US',
  themeColor: '#050816',
  keywords: [
    'Cloud engineering',
    'AWS consulting',
    'DevOps',
    'AI solutions',
    'Enterprise IT',
    'CI/CD',
    'Big Data',
    'ERP consulting',
    'McKinney TX',
    'Tech Alpha LLC',
  ],
  contact: {
    email: 'hr@techalphallc.com',
    phone: '+1 510 946 7863',
    phoneLink: 'tel:+15109467863',
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
