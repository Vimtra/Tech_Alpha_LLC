import type { Metadata } from 'next'
import { ArrowRight, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { JobCard } from '@/components/careers/JobCard'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { careersPage, jobs } from '@/content/careers'
import { breadcrumbJsonLd, itemListJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'
import { AMBER_GRADIENT } from '@/lib/theme'

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description:
    'Join Tech Alpha LLC — DevOps Engineer, QA Engineer, Programmer Analyst, IT Project Manager, System Engineer, and Validation Engineer openings in McKinney, Texas with U.S.-wide client travel.',
  path: '/careers',
})

export default function CareersPage() {
  const { culture, referralProgram } = careersPage

  return (
    <>
      {/* Hero */}
      <section aria-label="Careers hero" className="relative pt-[160px] pb-20">
        <Container size="wide" className="max-w-[1440px]">
          <SectionEyebrow>{careersPage.eyebrow}</SectionEyebrow>
          <GradientHeading
            as="h1"
            lead={careersPage.headline.lead}
            accent={careersPage.headline.accent}
            tail={careersPage.headline.tail}
            className="mt-6 max-w-4xl"
          />
          <p className="text-ink-muted mt-8 max-w-3xl text-lg leading-relaxed">
            {careersPage.description}
          </p>
        </Container>
      </section>

      {/* Open roles */}
      <section
        id="open-roles"
        aria-label="Open roles"
        className="relative scroll-mt-32 py-16 sm:py-20"
      >
        <Container size="wide" className="max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Open Roles</SectionEyebrow>
              <h2 className="text-ink mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {jobs.length} roles hiring now
              </h2>
            </div>
            <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
              All roles are based in McKinney, Texas with travel to U.S. client sites.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section aria-label="Culture" className="relative py-24 sm:py-32 lg:py-40">
        <Container size="wide" className="max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionEyebrow>{culture.eyebrow}</SectionEyebrow>
              <GradientHeading
                as="h2"
                lead={culture.headline.lead}
                accent={culture.headline.accent}
                tail={culture.headline.tail}
                className="mt-6"
              />
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {culture.values.map((value, i) => (
                <li
                  key={value.title}
                  className="relative rounded-2xl p-6"
                  style={{
                    background:
                      'linear-gradient(rgba(9,16,35,0.30), rgba(9,16,35,0.30)) padding-box, ' +
                      'linear-gradient(135deg, rgba(120,170,255,0.20), rgba(120,170,255,0.04)) border-box',
                    border: '1px solid transparent',
                    backdropFilter: 'blur(18px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(18px) saturate(140%)',
                  }}
                >
                  <span
                    className="bg-clip-text font-mono text-sm font-bold tracking-tight text-transparent"
                    style={{
                      backgroundImage:
                        AMBER_GRADIENT,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="text-ink mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="text-ink-muted mt-3 text-[14.5px] leading-[1.65]">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Referral program */}
      <section aria-label="Employee referral program" className="relative pb-24 sm:pb-32">
        <Container size="wide" className="max-w-[1440px]">
          <div
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
            style={{
              background:
                'linear-gradient(rgba(9,16,35,0.45), rgba(9,16,35,0.45)) padding-box, ' +
                'linear-gradient(135deg, rgba(120,170,255,0.30), rgba(120,170,255,0.08) 55%, rgba(248,151,35,0.16)) border-box',
              border: '1px solid transparent',
              backdropFilter: 'blur(22px) saturate(140%)',
              WebkitBackdropFilter: 'blur(22px) saturate(140%)',
            }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <SectionEyebrow>{referralProgram.eyebrow}</SectionEyebrow>
                <h2 className="text-ink mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  {referralProgram.title}
                </h2>
                <p className="text-ink-muted mt-6 text-[15px] leading-relaxed">
                  {referralProgram.description}
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Employee referral`}
                  className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill border border-hairline bg-white/[0.05] px-5 text-sm font-semibold text-ink transition hover:border-brand/40 hover:bg-white/[0.08]"
                >
                  <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  Refer a candidate
                </a>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-brand-soft font-mono text-[11px] tracking-[0.24em] uppercase">
                    Eligibility
                  </dt>
                  <dd className="text-ink-muted mt-3 text-[14px] leading-[1.65]">
                    {referralProgram.eligibility}
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-soft font-mono text-[11px] tracking-[0.24em] uppercase">
                    Procedure
                  </dt>
                  <dd className="text-ink-muted mt-3 text-[14px] leading-[1.65]">
                    {referralProgram.procedure}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA — apply */}
      <section aria-label="Apply" className="relative pb-24 sm:pb-32">
        <Container size="wide" className="max-w-[1440px]">
          <div className="text-center">
            <p className="text-ink-muted text-sm">{careersPage.generalApplication.prompt}</p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=General application`}
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161F]"
              style={{
                boxShadow: '0 12px 30px rgba(248,151,35,0.28), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              {careersPage.generalApplication.ctaLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      <JsonLd
        id="jsonld-careers-list"
        data={itemListJsonLd(
          jobs.map((j) => ({
            name: j.title,
            url: `${siteConfig.url}/careers/${j.slug}`,
            description: j.duties,
          })),
        )}
      />
      <JsonLd
        id="jsonld-careers-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Careers', url: `${siteConfig.url}/careers` },
        ])}
      />
    </>
  )
}
