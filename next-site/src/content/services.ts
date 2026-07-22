import { routes } from '@/constants/routes'

export type ServiceIconName = 'cloud' | 'wrench' | 'support'

export type ServicePreview = {
  slug: string
  tag: string
  title: string
  description: string
  iconName: ServiceIconName
  href: string
}

export const servicesPreview: readonly ServicePreview[] = [
  {
    slug: 'cloud-consulting',
    tag: 'Cloud · Strategy',
    title: 'Cloud Consulting',
    description:
      'Assessment, design, strategy, planning, and prototype (PoC) — including DevOps strategy, cloud deployment, and IDC migration across AWS and Azure.',
    iconName: 'cloud',
    href: routes.services,
  },
  {
    slug: 'technical-assistance',
    tag: 'ERP · SAP · Integration',
    title: 'Technical Assistance',
    description:
      'Hands-on deployment and migration of ERP applications, SAP services, application optimization, and infrastructure integration across the full stack.',
    iconName: 'wrench',
    href: routes.services,
  },
  {
    slug: 'proactive-support',
    tag: '24/7 · Managed',
    title: 'Proactive Support',
    description:
      '24/7 monitoring, management, and support with a dedicated technical consultant assigned to every client engagement.',
    iconName: 'support',
    href: routes.services,
  },
] as const

export const servicesPreviewSection = {
  eyebrow: 'Enterprise Services',
  headline: {
    lead: 'From cloud strategy to',
    accent: 'proactive operations',
    tail: '.',
  },
  description:
    'Three service lines cover the entire enterprise consulting engagement — from first assessment through 24/7 support, delivered by AWS-experienced engineers and a dedicated technical consultant.',
} as const
