import { routes } from '@/constants/routes'

// -----------------------------------------------------------------------------
// Preview trio (used on the home page)
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// Full detail (used on /services)
// -----------------------------------------------------------------------------

export type FullServiceIconName =
  | 'workflow'
  | 'server'
  | 'database'
  | 'code'
  | 'clipboard'
  | 'shield'

export type ServiceDetail = {
  slug: string
  number: string
  title: string
  tag: string
  summary: string
  paragraphs: readonly string[]
  capabilities: readonly string[]
  iconName: FullServiceIconName
}

export const servicesFullDetail: readonly ServiceDetail[] = [
  {
    slug: 'devops-cicd',
    number: '01',
    title: 'DevOps & CI/CD',
    tag: 'Delivery Pipelines',
    summary:
      'DevOps culture and continuous delivery pipelines for cloud success — release, test, operate, and innovate faster.',
    paragraphs: [
      'Adopting a DevOps culture is essential for enterprises seeking success in the cloud. Tech Alpha DevOps expertise gives teams the tooling to build continuous integration and continuous delivery workflows across development, testing, and operations.',
      'Our AWS-experienced DevOps engineers and solution architects construct CI/CD pipelines that accelerate development, integration, testing, and validation across every environment.',
    ],
    capabilities: [
      'Accelerated release cycles through automation',
      'Reduced deployment and support costs',
      'Continuous collaboration across Dev, QA, Support, Ops',
      'Automated pre-production and production workflows',
      'Improved code quality via pre-commit validations',
    ],
    iconName: 'workflow',
  },
  {
    slug: 'data-center-solutions',
    number: '02',
    title: 'Data Center Solutions',
    tag: 'Hybrid Infrastructure',
    summary:
      'Hybrid cloud and data center architecture that scales infrastructure on demand while reducing capital expenditure.',
    paragraphs: [
      'Scaling physical infrastructure requires planning and capital expenditure — long lead times for procurement, provisioning, and deployment. Cloud infrastructure can be provisioned quickly and helps organizations grow when they need it most.',
      'Tech Alpha architects solutions that work with on-premise infrastructure and provide the ability to scale into the cloud on demand. Pay-as-you-go pricing keeps total cost of ownership affordable.',
    ],
    capabilities: [
      'Hybrid on-premise + cloud environments',
      'Cloud migration strategy and deployment',
      'Infrastructure provisioning and scaling guidance',
      'Connectivity, integration, and configuration across the stack',
    ],
    iconName: 'server',
  },
  {
    slug: 'big-data-analytics',
    number: '03',
    title: 'Big Data Analytics',
    tag: 'Data · Insight',
    summary:
      'Enterprise big data solutions that capture structured and unstructured data and turn it into business insight.',
    paragraphs: [
      'Every business deals with overwhelming data and needs solutions to manage and extract value from it. Big data technology enables streamlined reporting and deeper insight for modern organizations.',
      'Tech Alpha helps companies discover new paradigms in data flowing through products, organizations, and infrastructure networks. Our experts capture structured and unstructured data at the source and transform it into insights that drive growth and revenue.',
    ],
    capabilities: [
      'Multi-data-center high-volume pipelines',
      'MapReduce programming',
      'Reporting and visualization',
      'Data modeling and algorithm development',
      'Data integration services',
      'ML, recommendations, and predictive analytics',
    ],
    iconName: 'database',
  },
  {
    slug: 'application-development',
    number: '04',
    title: 'Application Development',
    tag: 'Enterprise Apps · SDLC',
    summary:
      'Enterprise application development aligned to business objectives across the entire software development lifecycle.',
    paragraphs: [
      'Tech Alpha has helped industry-leading companies achieve marketplace success through extraordinary software solutions. Our experts remain true to business objectives throughout the software development lifecycle.',
      'Our approach helps clients improve business volume, profitability, quality, auditability, system performance, and other key metrics.',
    ],
    capabilities: [
      'Java application development, architecture, and design',
      'ESBs, ERP packages, portals, and enterprise systems',
      'Application installations, upgrades, and migrations',
      'Enterprise integration with .NET, Oracle, Progress',
      'Database administration and performance tuning',
      'Project management and co-implementation',
    ],
    iconName: 'code',
  },
  {
    slug: 'business-analysis',
    number: '05',
    title: 'Business Analysis',
    tag: 'Strategy · Delivery',
    summary:
      'Business and system analysis, project management, and IT project delivery — from business case through implementation.',
    paragraphs: [
      'Tech Alpha has skilled professionals in Business/System Analysis, Project Management, and IT Project Delivery. We help clients identify and articulate business needs, problems, and opportunities — then recommend or create solutions that add positive value.',
      'Our consultants work throughout the SDLC from business case to solution implementation, whether Agile, Scrum, XP, or Waterfall.',
    ],
    capabilities: [
      'Understand impact of changes to an organization',
      'Model new business processes and designs',
      'Define requirements to measure solution quality',
      'Identify business constraints on system behavior',
      'Direct project budgets toward high-impact changes',
    ],
    iconName: 'clipboard',
  },
  {
    slug: 'quality-assurance',
    number: '06',
    title: 'Quality Assurance',
    tag: 'Automation · Testing',
    summary:
      'QA automation and cloud-enabled testing to reduce defects, improve release speed, and support product success.',
    paragraphs: [
      'There is no shortcut for success — your product must function perfectly to succeed. Continuous improvement and defect-free delivery are the parameters Tech Alpha believes in.',
      'Software products depend on QA engineering to identify and resolve defects early, reduce time to market, and save costs. Tech Alpha can accelerate QA needs while clients focus on building their products.',
    ],
    capabilities: [
      'Accelerated release cycles through test automation',
      'CI/CD best practices',
      'Test strategy, plans, specifications, reports',
      'Test automation framework design',
      'Jenkins · Selenium · Appium · Perfecto · QMetry',
    ],
    iconName: 'shield',
  },
] as const

export const servicesPage = {
  eyebrow: 'Enterprise Services',
  headline: {
    lead: 'Six capabilities that carry',
    accent: 'the entire enterprise',
    tail: ' engagement.',
  },
  description:
    'From DevOps and hybrid infrastructure through big data, application delivery, and quality automation — Tech Alpha delivers every discipline required to modernize an enterprise IT estate, with a dedicated technical consultant on every engagement.',
} as const
