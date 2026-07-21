import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Industries',
  description:
    'Enterprise IT solutions across finance, healthcare, biotechnology, hospitality, automotive, aviation, and retail.',
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Industries</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Industries we serve</h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 7.
      </p>
    </Container>
  )
}
