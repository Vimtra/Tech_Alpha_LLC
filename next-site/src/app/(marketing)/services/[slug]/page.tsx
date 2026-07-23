import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ClosingCta } from '@/components/home/ClosingCta'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { servicesFullDetail } from '@/content/services'
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return servicesFullDetail.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesFullDetail.find((s) => s.slug === slug)
  if (!service) return buildMetadata({ title: 'Service not found', path: `/services/${slug}`, noIndex: true })
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = servicesFullDetail.find((s) => s.slug === slug)
  if (!service) notFound()

  const url = `${siteConfig.url}/services/${service.slug}`
  const idx = servicesFullDetail.findIndex((s) => s.slug === slug)
  const prev = idx > 0 ? servicesFullDetail[idx - 1] : null
  const next = idx < servicesFullDetail.length - 1 ? servicesFullDetail[idx + 1] : null

  return (
    <>
      <section aria-label={`${service.title} — service detail`} className="relative pt-[160px] pb-16">
        <Container size="wide" className="max-w-[1440px]">
          <Link
            href="/services"
            className="text-ink-muted hover:text-ink inline-flex items-center gap-2 text-sm font-medium transition"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            All services
          </Link>

          <div className="mt-10">
            <SectionEyebrow>
              {service.number} · {service.tag}
            </SectionEyebrow>
            <GradientHeading
              as="h1"
              lead={service.title.split(' ')[0] ?? service.title}
              accent={service.title.split(' ').slice(1).join(' ') || service.title}
              className="mt-6 max-w-4xl"
            />
            <p className="text-ink-muted mt-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
              {service.summary}
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Service details" className="relative pb-16">
        <Container size="wide" className="max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="space-y-8">
              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted text-[17px] leading-[1.75]">
                  {p}
                </p>
              ))}
            </div>

            <aside
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(rgba(9,16,35,0.40), rgba(9,16,35,0.40)) padding-box, ' +
                  'linear-gradient(135deg, rgba(120,170,255,0.30), rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.14)) border-box',
                border: '1px solid transparent',
                backdropFilter: 'blur(22px) saturate(140%)',
                WebkitBackdropFilter: 'blur(22px) saturate(140%)',
              }}
            >
              <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
                Capabilities
              </p>
              <ul className="mt-6 space-y-4">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: 'rgba(79,140,255,0.14)',
                        border: '1px solid rgba(120,170,255,0.22)',
                      }}
                      aria-hidden="true"
                    >
                      <Check className="text-brand-soft h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-ink text-[15px] leading-[1.6]">{cap}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* Prev / Next */}
      <section aria-label="Related services" className="relative pt-8 pb-16">
        <Container size="wide" className="max-w-[1440px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="group rounded-2xl border border-hairline bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-ink-faint inline-flex items-center gap-1.5 text-xs">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Previous
                </p>
                <p className="text-ink mt-2 text-lg font-semibold">{prev.title}</p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/services/${next.slug}`}
                className="group rounded-2xl border border-hairline bg-white/[0.02] p-6 text-right transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-ink-faint inline-flex items-center gap-1.5 text-xs">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </p>
                <p className="text-ink mt-2 text-lg font-semibold">{next.title}</p>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </Container>
      </section>

      <ClosingCta />

      <JsonLd
        id={`jsonld-service-${service.slug}`}
        data={serviceJsonLd({
          name: service.title,
          description: `${service.summary} ${service.paragraphs.join(' ')}`,
          slug: service.slug,
          url,
        })}
      />
      <JsonLd
        id={`jsonld-service-breadcrumbs-${service.slug}`}
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
          { name: service.title, url },
        ])}
      />
    </>
  )
}
