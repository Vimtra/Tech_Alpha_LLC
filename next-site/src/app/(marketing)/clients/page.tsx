import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clients',
  description:
    'Trusted by ORIX, Genentech, Blue Cross Blue Shield, Airbnb, S&P Global, Toyota, Virgin Atlantic, and Walmart.',
  path: '/clients',
})

export default function ClientsPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Clients</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
        Trusted by leading organizations
      </h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 11.
      </p>
    </Container>
  )
}
