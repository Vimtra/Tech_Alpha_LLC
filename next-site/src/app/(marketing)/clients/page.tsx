import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { clients } from '@/content/clients'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({ title: 'Clients', description: 'Explore the industries and technology engagements supported by Tech Alpha LLC.', path: '/clients' })

export default function ClientsPage() {
  const industries = [...new Set(clients.map((client) => client.industry))]
  return <Container className="py-20 sm:py-28">
    <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Clients</p>
    <h1 className="text-ink mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Technology consulting shaped around real operating needs</h1>
    <p className="text-ink-muted mt-6 max-w-3xl text-lg leading-relaxed">Tech Alpha supports organizations across financial services, healthcare, biotechnology, hospitality, aviation, automotive, retail, and financial publishing. Engagements span cloud consulting, DevOps, application delivery, data center work, and quality assurance.</p>
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <div key={industry} className="rounded-2xl border border-hairline bg-white/[0.03] p-5"><p className="text-ink text-lg font-semibold">{industry}</p><p className="text-ink-muted mt-2 text-sm">Enterprise technology support and delivery.</p></div>)}</div>
    <div className="mt-20 grid gap-4 md:grid-cols-2">{clients.map((client) => <article key={client.name} className="rounded-2xl border border-hairline bg-surface/60 p-6"><p className="text-brand-soft font-mono text-[11px] tracking-[0.18em] uppercase">{client.industry}</p><h2 className="text-ink mt-3 text-xl font-semibold">{client.name}</h2><p className="text-ink-muted mt-2 text-sm leading-relaxed">{client.service}</p></article>)}</div>
  </Container>
}
