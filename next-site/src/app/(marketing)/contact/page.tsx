import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactMap } from '@/components/contact/ContactMap'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { breadcrumbJsonLd, localBusinessJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Schedule a consultation with Tech Alpha LLC — cloud consulting, DevOps, IDC migration, managed ERP, and SAP services delivered from McKinney, TX with 24/7 proactive support.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <section
        aria-label="Contact hero"
        className="relative pt-[160px] pb-16"
      >
        <Container size="wide" className="max-w-[1440px]">
          <SectionEyebrow>Contact</SectionEyebrow>
          <GradientHeading
            as="h1"
            lead="Talk to a"
            accent="dedicated technical"
            tail=" consultant."
            className="mt-6 max-w-4xl"
          />
          <p className="text-ink-muted mt-8 max-w-2xl text-lg leading-relaxed">
            Every engagement starts with a conversation — assessment, design, or straight into
            migration. Send us a message and a Tech Alpha consultant will reach out within one business
            day.
          </p>
        </Container>
      </section>

      <section aria-label="Contact form and details" className="relative pb-24 sm:pb-32">
        <Container size="wide" className="max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <ContactForm />
            <div className="flex flex-col gap-6">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </Container>
      </section>

      <JsonLd id="jsonld-localbusiness" data={localBusinessJsonLd()} />
      <JsonLd
        id="jsonld-contact-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ])}
      />
    </>
  )
}
