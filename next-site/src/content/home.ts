import { routes } from '@/constants/routes'
import { siteConfig } from '@/constants/siteConfig'

export const heroContent = {
  eyebrow: 'DevOps · Cloud Computing · Consulting',
  headline: {
    lead: 'Enterprise',
    accent: 'cloud consulting',
    tail: ', engineered end-to-end.',
  },
  description:
    'Tech Alpha LLC helps organizations modernize with cloud strategy, DevOps, IDC migration, managed ERP, and SAP services — backed by 24/7 proactive support and a dedicated technical consultant on every engagement.',
  ctas: {
    primary: { label: 'Schedule a Consultation', to: routes.contact },
    secondary: { label: 'Explore Our Services', to: routes.services },
  },
} as const

export type HeroFloatingIconName = 'cloud' | 'gitBranch' | 'hardDrive' | 'wrench'

export type HeroFloatingCard = {
  iconName: HeroFloatingIconName
  title: string
  subtitle: string
  top: string
  right: string
  width: string
  dur: number
  delay: number
}

export const heroFloatingCards: readonly HeroFloatingCard[] = [
  {
    iconName: 'cloud',
    title: 'Cloud Strategy',
    subtitle: 'Assessment · Design · Prototype',
    top: '18%',
    right: '6%',
    width: '240px',
    dur: 11,
    delay: 0.2,
  },
  {
    iconName: 'gitBranch',
    title: 'DevOps & CI/CD',
    subtitle: 'Pipelines · AWS · Azure',
    top: '38%',
    right: '20%',
    width: '230px',
    dur: 13.5,
    delay: 1.4,
  },
  {
    iconName: 'hardDrive',
    title: 'IDC Migration',
    subtitle: 'Data Center · Hybrid Cloud',
    top: '60%',
    right: '6%',
    width: '230px',
    dur: 12,
    delay: 0.8,
  },
  {
    iconName: 'wrench',
    title: 'Managed ERP · SAP',
    subtitle: 'App Services · Optimization',
    top: '78%',
    right: '22%',
    width: '240px',
    dur: 10.5,
    delay: 2,
  },
] as const

export const aboutPreview = {
  eyebrow: 'About Tech Alpha',
  headline: {
    lead: 'A DevOps and',
    accent: 'cloud consulting',
    tail: 'company built for enterprise scale.',
  },
  paragraphs: [
    'Tech Alpha LLC is a DevOps and cloud computing consulting company headquartered in McKinney, Texas — positioned as one of the fastest-growing IT consulting firms in the USA.',
    'We deliver cloud consulting from assessment and design through strategy, planning, and prototype — extended by DevOps, IDC migration, managed ERP, application optimization, and SAP services.',
    'Every engagement includes a dedicated technical consultant, 24/7 proactive support, and hands-on assistance deploying, migrating, and integrating environments across the entire technology stack.',
  ],
  bulletsTitle: 'What we deliver',
  bullets: [
    'Cloud consulting: assessment, design, strategy, planning, prototype',
    'DevOps and CI/CD across AWS and Azure',
    'IDC migration and hybrid infrastructure',
    'Managed ERP application services and SAP',
    'Application optimization and infrastructure integration',
    'Dedicated technical consultants with 24/7 proactive support',
  ],
} as const

export const whyChooseUs = {
  eyebrow: 'Why Tech Alpha',
  headline: {
    lead: 'Enterprise consulting,',
    accent: 'delivered with care',
    tail: '.',
  },
  description:
    'Six reasons enterprises across finance, healthcare, biotechnology, retail, aviation, and automotive choose Tech Alpha as their long-term cloud and DevOps partner.',
  items: [
    {
      iconName: 'users',
      title: 'Dedicated Technical Consultant',
      description:
        'A senior technical consultant is assigned to every engagement — one accountable point of contact from assessment through operations.',
    },
    {
      iconName: 'headphones',
      title: '24/7 Proactive Support',
      description:
        'Continuous monitoring, management, and support — issues surfaced and resolved before they impact your business.',
    },
    {
      iconName: 'route',
      title: 'End-to-End Methodology',
      description:
        'Assess, design, strategize, plan, prototype — a repeatable path from the current state to a production-ready target.',
    },
    {
      iconName: 'wrench',
      title: 'Hands-On Migration',
      description:
        'Deep implementation work across on-premise, hybrid, and cloud — including deployment, integration, and configuration.',
    },
    {
      iconName: 'building',
      title: 'Cross-Industry Experience',
      description:
        'Delivered across finance, biotechnology, healthcare, retail, aviation, hospitality, and automotive.',
    },
    {
      iconName: 'layers',
      title: 'Multi-Platform Coverage',
      description:
        'AWS, Azure, hybrid environments, ERP platforms, and SAP — one partner across the full enterprise stack.',
    },
  ],
} as const

export const technologies = {
  eyebrow: 'Technologies',
  headline: {
    lead: 'The stack we',
    accent: 'engineer with',
    tail: '.',
  },
  description:
    'Platforms and tooling used across our cloud, DevOps, and enterprise application engagements.',
  groups: [
    {
      label: 'Cloud',
      iconName: 'cloud',
      items: ['AWS', 'Azure', 'Hybrid Cloud'],
    },
    {
      label: 'DevOps & CI/CD',
      iconName: 'gitBranch',
      items: ['Jenkins', 'Git', 'Bitbucket', 'SVN'],
    },
    {
      label: 'Configuration',
      iconName: 'settings',
      items: ['Ansible', 'Chef', 'Puppet'],
    },
    {
      label: 'Enterprise Apps',
      iconName: 'box',
      items: ['SAP', 'ERP Platforms'],
    },
    {
      label: 'Quality Automation',
      iconName: 'circuitBoard',
      items: ['Selenium', 'JIRA'],
    },
  ],
} as const

export const consultingProcess = {
  eyebrow: 'Consulting Process',
  headline: {
    lead: 'A repeatable path from',
    accent: 'assessment to operations',
    tail: '.',
  },
  description:
    'Every engagement follows the same enterprise methodology — proven across finance, biotechnology, healthcare, and beyond.',
  steps: [
    {
      number: '01',
      title: 'Assess',
      description: 'Discover the current environment, constraints, and business goals.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Architect the target state and cloud, DevOps, and integration strategy.',
    },
    {
      number: '03',
      title: 'Plan',
      description: 'Sequence migration, integration, and delivery workstreams.',
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'Hands-on migration, integration, and configuration across the stack.',
    },
    {
      number: '05',
      title: 'Support',
      description: '24/7 proactive monitoring, management, and continuous optimization.',
    },
  ],
} as const

export const closingCta = {
  eyebrow: 'Ready when you are',
  headline: {
    lead: 'Let’s engineer your next',
    accent: 'cloud transformation',
    tail: '.',
  },
  description: 'Every engagement starts with a dedicated technical consultant.',
  ctas: {
    primary: { label: 'Schedule a Consultation', href: routes.contact, type: 'internal' as const },
    secondary: {
      label: 'Talk to Our Experts',
      href: `mailto:${siteConfig.contact.email}`,
      type: 'external' as const,
    },
  },
} as const
