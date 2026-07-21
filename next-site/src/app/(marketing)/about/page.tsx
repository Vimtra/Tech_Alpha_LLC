import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'AWS-certified engineers delivering cloud, DevOps, and ERP consulting from McKinney, TX.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">About</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">About Tech Alpha</h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 5.
      </p>
    </Container>
  )
}
