import type { Metadata } from 'next'
import { Hero } from '@/components/hero/Hero'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cloud & AI Enterprise Solutions',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
    </>
  )
}
