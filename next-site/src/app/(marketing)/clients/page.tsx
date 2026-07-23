import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ClientsGrid } from '@/components/clients/ClientsGrid'
import { ClosingCta } from '@/components/home/ClosingCta'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { clients } from '@/content/clients'
import { breadcrumbJsonLd, itemListJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clients',
  description:
    'Enterprise engagements delivered by Tech Alpha LLC - ORIX, Genentech, Blue Cross Blue Shield, Airbnb, S&P Global, Toyota, Virgin Atlantic, and Walmart across financial services, biotechnology, healthcare, retail, aviation, and automotive.',
  path: '/clients',
})

export default function ClientsPage() {
  return (
    <>
      <section aria-label="Clients hero" className="relative pt-[160px] pb-16">
        <Container size="wide" className="max-w-[1440px]">
          <SectionEyebrow>Clients</SectionEyebrow>
          <GradientHeading
            as="h1"
            lead="Enterprise engagements across"
            accent="seven industries"
            tail="."
            className="mt-6 max-w-4xl"
          />
          <p className="text-ink-muted mt-8 max-w-2xl text-lg leading-relaxed">
            A selection of enterprises Tech Alpha has supported with cloud, DevOps, data, and
            application engagements - filter by industry to see which service line we delivered.
          </p>
        </Container>
      </section>

      <section aria-label="Client list" className="relative pb-24 sm:pb-32">
        <Container size="wide" className="max-w-[1440px]">
          <ClientsGrid />
        </Container>
      </section>

      <ClosingCta />

      <JsonLd
        id="jsonld-clients-list"
        data={itemListJsonLd(
          clients.map((c) => ({
            name: c.name,
            url: `${siteConfig.url}/clients`,
            description: `${c.industry} - ${c.service}. ${c.description}`,
          })),
        )}
      />
      <JsonLd
        id="jsonld-clients-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Clients', url: `${siteConfig.url}/clients` },
        ])}
      />
    </>
  )
}
