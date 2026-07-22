import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/constants/siteConfig'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({ title: 'Careers', description: 'Connect with Tech Alpha LLC about future opportunities in cloud and DevOps consulting.', path: '/careers' })

export default function CareersPage() {
  return <Container className="py-20 sm:py-28">
    <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Careers</p>
    <h1 className="text-ink mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Build what keeps modern businesses moving</h1>
    <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">We are building a team for practical, hands-on cloud consulting, DevOps, migration, ERP, and proactive support work. No active openings are published at this time, but we welcome thoughtful introductions for future opportunities.</p>
    <div className="mt-14 grid gap-4 md:grid-cols-3">{['Practical engineering', 'Customer-minded delivery', 'Continuous learning'].map((title) => <div key={title} className="rounded-2xl border border-hairline bg-white/[0.03] p-6"><h2 className="text-ink text-xl font-semibold">{title}</h2><p className="text-ink-muted mt-3 text-sm leading-relaxed">Bring curiosity, care, and a bias toward clear solutions to complex technology environments.</p></div>)}</div>
    <div className="mt-14 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 sm:p-8"><h2 className="text-ink text-2xl font-semibold">General applications</h2><p className="text-ink-muted mt-3 max-w-2xl leading-relaxed">Send a resume and a short introduction describing your experience and the kind of work you would like to do.</p><Link href={'mailto:' + siteConfig.contact.email + '?subject=General%20Application%20-%20Tech%20Alpha%20LLC'} className="mt-6 inline-flex h-12 items-center rounded-pill bg-brand-gradient px-6 font-semibold text-[#12161f]">Email your resume</Link></div>
  </Container>
}
