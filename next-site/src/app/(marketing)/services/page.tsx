import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'DevOps, cloud engineering, big data, application development, business analysis, and QA automation for enterprise organizations.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Services</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Services</h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 6.
      </p>
    </Container>
  )
}
