import Link from 'next/link'
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react'
import type { Job } from '@/content/careers'

export function JobCard({ job }: { job: Job }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl p-7"
      style={{
        background:
          'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
          'linear-gradient(135deg, rgba(120,170,255,0.24), rgba(120,170,255,0.05)) border-box',
        border: '1px solid transparent',
        backdropFilter: 'blur(18px) saturate(140%)',
        WebkitBackdropFilter: 'blur(18px) saturate(140%)',
      }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-brand-soft font-mono text-[10px] tracking-[0.24em] uppercase">
          {job.category} · {job.level}
        </p>
        <p className="text-ink-faint font-mono text-[10px] tracking-[0.16em] uppercase">
          {job.openings} openings
        </p>
      </div>
      <h3 className="text-ink mt-3 text-xl font-semibold tracking-tight">
        <Link
          href={`/careers/${job.slug}`}
          className="hover:text-brand-soft transition"
        >
          {job.title}
        </Link>
      </h3>
      <p className="text-ink-muted mt-4 text-[14.5px] leading-[1.65] line-clamp-3">
        {job.duties}
      </p>
      <div className="text-ink-muted mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          {job.type}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          McKinney, TX · U.S. travel
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-brand-soft text-sm font-semibold">{job.salaryDisplay}</p>
        <Link
          href={`/careers/${job.slug}`}
          aria-label={`View ${job.title} details`}
          className="text-brand hover:border-brand/40 hover:bg-brand/[0.12] group inline-flex h-9 items-center gap-1.5 rounded-full border border-brand/20 bg-brand/[0.06] pl-4 pr-1.5 text-xs font-semibold transition"
        >
          View role
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand/25 bg-brand/[0.10] transition group-hover:translate-x-0.5">
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  )
}
