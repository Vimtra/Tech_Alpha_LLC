import { siteConfig } from '@/constants/siteConfig'

const OFFICE_ADDRESS = `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.region} ${siteConfig.contact.address.postalCode}`

export type JobLevel = 'Senior' | 'Mid' | 'Junior'

export type Job = {
  slug: string
  title: string
  type: string
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR'
  salaryDisplay: string
  baseSalary?: { currency: string; value: number; unit: 'YEAR' }
  postingDate: string
  openings: string
  location: string
  duties: string
  education: string
  experience: string
  level: JobLevel
  category: 'DevOps' | 'Quality' | 'Development' | 'Systems' | 'Delivery' | 'Validation'
}

export const jobs: readonly Job[] = [
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    type: 'Full-time · 40 hours per week',
    employmentType: 'FULL_TIME',
    salaryDisplay: '$149,781 per year',
    baseSalary: { currency: 'USD', value: 149781, unit: 'YEAR' },
    postingDate: '2025-03-14',
    openings: '5',
    location: OFFICE_ADDRESS,
    duties:
      'Design, develop, implement, and support continuous integration / continuous delivery application build and deployment pipelines with GIT, Jenkins, Bitbucket, and SVN. Design and develop test automation to validate builds in CI/CD pipelines. Design, build, and manage large-scale applications in AWS and Azure, using infrastructure-as-code to improve availability, scalability, and efficiency. Work with configuration management tools such as Ansible, Chef, and Puppet. Travel and relocation to unanticipated client sites throughout the USA is required.',
    education:
      "Master's degree in Computers, IT, Engineering, Science, Business, or a related field with six months of experience in the job offered or a closely related IT role. Employer also accepts a Bachelor's degree plus five years of progressive related work experience.",
    experience: 'Six months of experience working with DevOps tools is required.',
    level: 'Senior',
    category: 'DevOps',
  },
  {
    slug: 'software-qa-engineer',
    title: 'Software QA Engineer',
    type: 'Full-time · 40 hours per week',
    employmentType: 'FULL_TIME',
    salaryDisplay: '$126,131 per year',
    baseSalary: { currency: 'USD', value: 126131, unit: 'YEAR' },
    postingDate: '2025-03-14',
    openings: '3',
    location: OFFICE_ADDRESS,
    duties:
      'Analyze and define computer systems and software problems. Define software testing standards and solutions by evaluating procedures and processes. Utilize test cases, plans, and scenarios based on business requirements. Test stand-alone, client-server, web-based, and web-service applications. Maintain and monitor computer programs and systems, document testing procedures and standards, and improve systems using Selenium and JIRA. Travel and relocation to unanticipated client sites throughout the USA is required.',
    education:
      "Master's degree in Computer Science, IT, Engineering, Business, or a related field with six months of experience in the job offered or a closely related IT role. Employer also accepts a Bachelor's degree plus five years of progressive related work experience.",
    experience: 'Six months of experience using JIRA or Selenium is required.',
    level: 'Mid',
    category: 'Quality',
  },
  {
    slug: 'it-project-manager',
    title: 'IT Project Manager',
    type: 'Full-time · 40 hours per week',
    employmentType: 'FULL_TIME',
    salaryDisplay: 'Contact for details',
    postingDate: '2025-03-14',
    openings: '5',
    location: OFFICE_ADDRESS,
    duties:
      'Plan and coordinate designated projects from inception to completion. Accountable for successful project delivery, defining scope, creating accurate estimates, developing budgets and project plans, and producing Statements of Work and planning documentation for funding approvals. Ensure projects comply with client project management methodology and key controls, and that progress and financial status are reported accurately and regularly. This role manages project workflow — it does not manage other employees.',
    education:
      "Master's degree in Computer Science, Engineering, Electrical, Electronics, Software Engineering, Computer Information Systems, or a related field. Travel and relocation to unanticipated work sites throughout the U.S. is required.",
    experience:
      'Six months of experience with DevOps, AWS, Python, Jenkins, Maven, and Splunk is required.',
    level: 'Senior',
    category: 'Delivery',
  },
  {
    slug: 'programmer-analyst',
    title: 'Programmer Analyst',
    type: 'Full-time · 40 hours per week',
    employmentType: 'FULL_TIME',
    salaryDisplay: 'Contact for details',
    postingDate: '2025-03-14',
    openings: '5',
    location: OFFICE_ADDRESS,
    duties:
      'Create, modify, write, and test computer programming code and scripts that allow applications to run. Use current C# and Java programming languages. Work from specifications drawn up by software architects using the latest programming methodologies. Use code to store, locate, and retrieve data from enterprise database servers based on Oracle, SQL Server, and MySQL. Travel and relocation to unanticipated client sites throughout the USA is required.',
    education:
      "Master's degree in Computers, IT, Engineering, Science, Business, or a related field with six months of experience in the job offered or a closely related IT role. Employer also accepts a Bachelor's degree plus five years of progressive related work experience.",
    experience: 'Six months of experience working with C# or Java is required.',
    level: 'Mid',
    category: 'Development',
  },
  {
    slug: 'system-engineer',
    title: 'System Engineer',
    type: 'Full-time · 40 hours per week',
    employmentType: 'FULL_TIME',
    salaryDisplay: 'Contact for details',
    postingDate: '2025-03-14',
    openings: '3',
    location: OFFICE_ADDRESS,
    duties:
      'Manage and administer Windows servers and Windows OS–based computers in corporate environments. Deploy apps, patches, and packages using Microsoft SCCM. Migrate systems between Windows versions using SCCM, create software update groups, develop automatic deployment techniques, and assist in automatic deployment of apps and patches. Utilize packaging tools (InstallShield, AdminStudio, Wise Package Studio) and scripting languages (VBScript, PowerShell, WiseScript). Travel and relocation to unanticipated client sites throughout the USA is required.',
    education:
      "Master's degree in Computer Science, IT, Engineering, or a closely related field with six months of experience in the job offered or a closely related IT role. Employer also accepts a Bachelor's degree plus five years of progressive related work experience.",
    experience: 'Six months of experience using SCCM is required.',
    level: 'Mid',
    category: 'Systems',
  },
  {
    slug: 'validation-engineer',
    title: 'Validation Engineer',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    salaryDisplay: 'Contact for details',
    postingDate: '2025-03-14',
    openings: 'Open',
    location: OFFICE_ADDRESS,
    duties: 'LIMS, EBM, and ERP validation engineering work across regulated enterprise systems.',
    education:
      "Master's degree in a relevant field plus six months of experience, or equivalent progressive work experience.",
    experience: 'Validation engineering experience with LIMS, EBM, and ERP.',
    level: 'Mid',
    category: 'Validation',
  },
]

export const careersPage = {
  eyebrow: 'Careers at Tech Alpha',
  headline: {
    lead: 'Build enterprise IT with',
    accent: 'engineers who own the outcome',
    tail: '.',
  },
  description:
    'Tech Alpha delivers cloud, DevOps, ERP, and application engineering to enterprises across seven industries. We hire technologists who take ownership from assessment through 24/7 operations — and who like being the dedicated technical consultant on real engagements.',
  culture: {
    eyebrow: 'How we work',
    headline: {
      lead: 'An ethical culture,',
      accent: 'dedicated engagements',
      tail: '.',
    },
    values: [
      {
        title: 'Own the engagement',
        description:
          'Every project has one accountable technical consultant from assessment through operations — no throw-over-the-wall handoffs.',
      },
      {
        title: 'Ethical work culture',
        description:
          'Keep the best interest of customers and employees in mind, within a stimulating and safe work environment.',
      },
      {
        title: 'Continuous learning',
        description:
          'AWS, Azure, DevOps tooling, SAP, and ERP platforms evolve quickly. So do we — through certifications and hands-on delivery.',
      },
      {
        title: '24/7 delivery mindset',
        description:
          'We monitor, manage, and support systems around the clock. Reliability is the product.',
      },
    ],
  },
  referralProgram: {
    eyebrow: 'Employee Referrals',
    title: 'The Tech Alpha Referral Program',
    description:
      'Techalpha LLC employees can refer qualified candidates for open positions. If the referred candidate is hired and stays with the company for at least 365 days, the referring employee receives a special bonus.',
    eligibility:
      'Current employees of Techalpha LLC are eligible to make referrals. In case of multiple referrals, the first employee to submit the referral will be recognized. The referred candidate must not be a current employee.',
    procedure:
      'Refer candidates to any open position by contacting HR directly. If the referred candidate is offered and accepts, HR will contact the referring employee. Upon meeting the requirements, the employee applies with HR for the referral fee.',
  },
  generalApplication: {
    prompt: "Don't see a fit? We accept general applications.",
    ctaLabel: 'Send your resume',
  },
} as const
