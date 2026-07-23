import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Briefcase, Calendar, MapPin, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { jobs } from '@/content/careers'
import { breadcrumbJsonLd, jobPostingJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return jobs.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const job = jobs.find((j) => j.slug === slug)
  if (!job) return buildMetadata({ title: 'Role not found', path: `/careers/${slug}`, noIndex: true })
  return buildMetadata({
    title: `${job.title} · Careers`,
    description: job.duties.slice(0, 160),
    path: `/careers/${job.slug}`,
  })
}

function computeValidThrough(datePosted: string) {
  const d = new Date(datePosted)
  d.setMonth(d.getMonth() + 6)
  return d.toISOString().slice(0, 10)
}

export default async function JobDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const job = jobs.find((j) => j.slug === slug)
  if (!job) notFound()

  const applyMailto = `mailto:${siteConfig.contact.email}?subject=Application: ${encodeURIComponent(job.title)}`
  const validThrough = computeValidThrough(job.postingDate)
  const posted = new Date(job.postingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Hero */}
      <section aria-label={`${job.title} — role details`} className="relative pt-[160px] pb-16">
        <Container className="max-w-4xl">
          <Link
            href="/careers"
            className="text-ink-muted hover:text-ink inline-flex items-center gap-2 text-sm font-medium transition"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            All open roles
          </Link>

          <div className="mt-8">
            <SectionEyebrow>
              {job.category} · {job.level}
            </SectionEyebrow>
            <GradientHeading
              as="h1"
              lead={job.title.split(' ')[0] ?? job.title}
              accent={job.title.split(' ').slice(1).join(' ') || job.title}
              className="mt-6"
            />
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Briefcase, label: 'Type', value: job.type },
              { Icon: MapPin, label: 'Location', value: 'McKinney, TX · Client sites U.S.' },
              { Icon: Users, label: 'Openings', value: job.openings },
              { Icon: Calendar, label: 'Posted', value: posted },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(9,16,35,0.35)',
                  border: '1px solid rgba(120,170,255,0.14)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                }}
              >
                <dt className="text-ink-faint flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase">
                  <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                  {label}
                </dt>
                <dd className="text-ink mt-2 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={applyMailto}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161F]"
              style={{
                boxShadow:
                  '0 12px 30px rgba(248,151,35,0.28), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              Apply for this role
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </a>
            <p className="text-ink-faint text-xs">
              Salary: <span className="text-ink font-medium">{job.salaryDisplay}</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section aria-label="Role details" className="relative pb-24 sm:pb-32">
        <Container className="max-w-4xl space-y-14">
          <div>
            <h2 className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              Job duties
            </h2>
            <p className="text-ink mt-4 text-[17px] leading-[1.75]">{job.duties}</p>
          </div>
          <div>
            <h2 className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              Education required
            </h2>
            <p className="text-ink-muted mt-4 text-[16px] leading-[1.75]">{job.education}</p>
          </div>
          <div>
            <h2 className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              Experience required
            </h2>
            <p className="text-ink-muted mt-4 text-[16px] leading-[1.75]">{job.experience}</p>
          </div>
          <div>
            <h2 className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              How to apply
            </h2>
            <p className="text-ink-muted mt-4 text-[16px] leading-[1.75]">
              Send your resume and a short note to{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-soft underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
              >
                {siteConfig.contact.email}
              </a>{' '}
              with the subject line{' '}
              <span className="text-ink font-mono text-[13px]">
                Application: {job.title}
              </span>
              . A member of our HR team will follow up within one business day.
            </p>
          </div>
        </Container>
      </section>

      <JsonLd
        id={`jsonld-job-${job.slug}`}
        data={jobPostingJsonLd({
          title: job.title,
          slug: job.slug,
          description: `${job.duties} Education: ${job.education} Experience: ${job.experience}`,
          employmentType: job.employmentType,
          datePosted: job.postingDate,
          validThrough,
          baseSalary: job.baseSalary,
          educationRequirement: 'associate degree',
          experienceRequirement: job.experience,
        })}
      />
      <JsonLd
        id={`jsonld-job-breadcrumbs-${job.slug}`}
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Careers', url: `${siteConfig.url}/careers` },
          { name: job.title, url: `${siteConfig.url}/careers/${job.slug}` },
        ])}
      />
    </>
  )
}
