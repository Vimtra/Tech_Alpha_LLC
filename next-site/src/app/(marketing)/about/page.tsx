import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { CompanyStory } from '@/components/about/CompanyStory'
import { IndustriesClients } from '@/components/about/IndustriesClients'
import { MissionVisionCulture } from '@/components/about/MissionVisionCulture'
import { StatsStrip } from '@/components/about/StatsStrip'
import { ClosingCta } from '@/components/home/ClosingCta'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About Tech Alpha',
  description:
    'Tech Alpha LLC is a DevOps and cloud computing consulting company headquartered in McKinney, Texas — delivering assessment, design, migration, and 24/7 support to enterprise clients across finance, healthcare, biotechnology, retail, and beyond.',
  path: '/about',
})

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteConfig.url}/about#aboutpage`,
  url: `${siteConfig.url}/about`,
  name: `About ${siteConfig.name}`,
  description:
    'Tech Alpha LLC is a DevOps and cloud computing consulting company delivering end-to-end enterprise transformation from McKinney, Texas.',
  mainEntity: { '@id': `${siteConfig.url}#organization` },
} as const

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsStrip />
      <CompanyStory />
      <MissionVisionCulture />
      <IndustriesClients />
      <ClosingCta />
      <JsonLd id="jsonld-about" data={aboutPageJsonLd} />
      <JsonLd
        id="jsonld-about-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'About', url: `${siteConfig.url}/about` },
        ])}
      />
    </>
  )
}
