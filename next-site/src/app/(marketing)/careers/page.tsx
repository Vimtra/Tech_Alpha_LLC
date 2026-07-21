import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description:
    'DevOps Engineer, QA Engineer, Programmer Analyst, Systems Engineer, and more open roles at Tech Alpha LLC.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <Container className="py-24">
      <p className="text-brand-soft font-mono text-xs tracking-[0.24em] uppercase">Careers</p>
      <h1 className="text-ink mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Careers</h1>
      <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">
        Section content lands in Step 12.
      </p>
    </Container>
  )
}
