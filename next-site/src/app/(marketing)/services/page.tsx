import type { Metadata } from 'next'
import { ClosingCta } from '@/components/home/ClosingCta'
import { JsonLd } from '@/components/common/JsonLd'
import { ServiceChapter } from '@/components/services/ServiceChapter'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesSideNav } from '@/components/services/ServicesSideNav'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/constants/siteConfig'
import { servicesFullDetail } from '@/content/services'
import { breadcrumbJsonLd, itemListJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Enterprise Services',
  description:
    'DevOps, hybrid infrastructure, big data, application delivery, business analysis, and quality automation — six enterprise capabilities delivered by Tech Alpha LLC with AWS-experienced engineers and 24/7 proactive support.',
  path: '/services',
  keywords: [
    'Enterprise services',
    'DevOps',
    'CI/CD pipelines',
    'Data center solutions',
    'Hybrid cloud',
    'Big data analytics',
    'Application development',
    'Enterprise Java',
    'ERP',
    'SAP',
    'Business analysis',
    'Quality assurance',
    'Test automation',
    'AWS consulting',
    'Azure consulting',
    'Tech Alpha LLC',
  ],
})

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section aria-label="Enterprise services detail" className="relative py-16 sm:py-24">
        <Container size="wide" className="max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <ServicesSideNav />
            <div className="space-y-8 sm:space-y-10">
              {servicesFullDetail.map((service, i) => (
                <ServiceChapter key={service.slug} service={service} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta />

      <JsonLd
        id="jsonld-services-list"
        data={itemListJsonLd(
          servicesFullDetail.map((s) => ({
            name: s.title,
            url: `${siteConfig.url}/services#${s.slug}`,
            description: s.summary,
          })),
        )}
      />
      <JsonLd
        id="jsonld-services-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ])}
      />
    </>
  )
}
