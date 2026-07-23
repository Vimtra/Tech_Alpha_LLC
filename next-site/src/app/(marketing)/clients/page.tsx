import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ClientsGrid } from '@/components/clients/ClientsGrid'
import { ClientsHero } from '@/components/clients/ClientsHero'
import { ClosingCta } from '@/components/home/ClosingCta'
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
      <ClientsHero />

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
