import type { Metadata } from 'next'
import { Hero } from '@/components/hero/Hero'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ClientsMarquee } from '@/components/home/ClientsMarquee'
import { ClosingCta } from '@/components/home/ClosingCta'
import { ConsultingProcess } from '@/components/home/ConsultingProcess'
import { FaqSection } from '@/components/home/FaqSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { Technologies } from '@/components/home/Technologies'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { faqItems } from '@/content/faq'
import { servicesPreview } from '@/content/services'
import { breadcrumbJsonLd, faqJsonLd, serviceCatalogJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'DevOps & Cloud Consulting for the Enterprise',
  description:
    'Tech Alpha LLC delivers enterprise cloud consulting, DevOps engineering, IDC migration, managed ERP, and SAP services — with 24/7 proactive support and a dedicated technical consultant on every engagement. AWS · Azure · Hybrid.',
  path: '/',
  keywords: [
    'Enterprise cloud consulting',
    'Cloud strategy',
    'Cloud migration',
    'AWS consulting',
    'Azure consulting',
    'DevOps',
    'CI/CD pipelines',
    'Hybrid cloud',
    'IDC migration',
    'SAP services',
    'Managed ERP',
    'Application optimization',
    'Infrastructure integration',
    'Technical assistance',
    '24/7 proactive support',
    'Digital transformation',
    'Enterprise IT solutions',
    'McKinney Texas',
    'Tech Alpha LLC',
  ],
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Technologies />
      <ConsultingProcess />
      <FaqSection />
      <ClosingCta />
      <JsonLd
        id="jsonld-service-catalog"
        data={serviceCatalogJsonLd(
          servicesPreview.map((s) => ({
            name: s.title,
            description: s.description,
            slug: s.slug,
          })),
        )}
      />
      <JsonLd id="jsonld-home-faq" data={faqJsonLd([...faqItems])} />
      <JsonLd
        id="jsonld-home-breadcrumbs"
        data={breadcrumbJsonLd([{ name: 'Home', url: siteConfig.url }])}
      />
    </>
  )
}
