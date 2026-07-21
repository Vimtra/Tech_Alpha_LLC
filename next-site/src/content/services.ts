import { routes } from '@/constants/routes'

export type ServiceIconName = 'cloud' | 'brain' | 'layers'

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
    slug: 'cloud-devops',
    tag: 'Cloud · DevOps',
    title: 'Cloud & DevOps',
    description:
      'AWS-certified CI/CD pipelines, hybrid infrastructure, and cloud migration — from architecture through 24/7 operations.',
    iconName: 'cloud',
    href: routes.services,
  },
  {
    slug: 'data-ai',
    tag: 'Data · AI',
    title: 'Data & AI',
    description:
      'Capture structured and unstructured data at the source and turn it into insight — pipelines, ML, and predictive analytics.',
    iconName: 'brain',
    href: routes.services,
  },
  {
    slug: 'application-engineering',
    tag: 'Applications',
    title: 'Application Engineering',
    description:
      'Enterprise Java, .NET, ERP, and quality automation aligned to business objectives across the full software lifecycle.',
    iconName: 'layers',
    href: routes.services,
  },
] as const

export const servicesPreviewSection = {
  eyebrow: 'Core Services',
  headline: {
    lead: 'Enterprise solutions engineered for',
    accent: 'cloud & AI',
    tail: '.',
  },
  description:
    'AWS-certified engineers deliver assessment, design, strategy, prototype, and hands-on migration across the entire technology stack — with a dedicated technical consultant assigned to every client.',
} as const
