import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Schedule a consultation with Tech Alpha LLC — cloud, DevOps, AI, and enterprise IT services from McKinney, TX.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Contact</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Get in touch</h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 13.
      </p>
    </Container>
  )
}
