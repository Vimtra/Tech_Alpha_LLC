import { routes } from '@/constants/routes'

export const heroContent = {
  eyebrow: 'AWS Certified · AI-Driven · Enterprise Solutions',
  headline: {
    lead: 'Engineering the future with',
    accent: 'Cloud & AI',
    tail: 'Enterprise Solutions.',
  },
  description:
    'Tech Alpha LLC empowers businesses with secure cloud engineering, AI-powered innovation, DevOps excellence, and digital transformation for lasting impact.',
  ctas: {
    primary: { label: 'Schedule a Consultation', to: routes.contact },
    secondary: { label: 'Explore Our Services', to: routes.services },
  },
} as const

export type HeroContent = typeof heroContent
