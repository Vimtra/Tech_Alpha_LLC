'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceDetail, FullServiceIconName } from '@/content/services'

const ICONS: Record<FullServiceIconName, LucideIcon> = {
  workflow: Workflow,
  server: Server,
  database: Database,
  code: Code2,
  clipboard: ClipboardList,
  shield: ShieldCheck,
}

export function ServiceChapter({ service, index }: { service: ServiceDetail; index: number }) {
  const Icon = ICONS[service.iconName]

  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-32 overflow-hidden rounded-[28px] p-8 sm:p-12"
      style={{
        background:
          'linear-gradient(rgba(9,16,35,0.40), rgba(9,16,35,0.40)) padding-box, ' +
          'linear-gradient(135deg, rgba(120,170,255,0.28) 0%, rgba(120,170,255,0.05) 55%, rgba(248,151,35,0.14) 100%) border-box',
        border: '1px solid transparent',
        backdropFilter: 'blur(22px) saturate(140%)',
        WebkitBackdropFilter: 'blur(22px) saturate(140%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
      }}
    >
      {/* Corner glow — alternates side per chapter */}
      <div
        aria-hidden="true"
        className={
          index % 2 === 0
            ? 'pointer-events-none absolute -top-1/3 -right-1/4 h-[70%] w-[70%] rounded-full'
            : 'pointer-events-none absolute -top-1/3 -left-1/4 h-[70%] w-[70%] rounded-full'
        }
        style={{
          background:
            'radial-gradient(circle at center, rgba(79,140,255,0.20) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
        }}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left column — number + icon + capabilities */}
        <div>
          <div className="flex items-center gap-4">
            <span
              className="bg-clip-text font-mono font-bold tracking-tight text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)',
                fontSize: 'clamp(2.5rem, 3vw + 1rem, 4rem)',
                lineHeight: 1,
              }}
            >
              {service.number}
            </span>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(120,170,255,0.20)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <Icon className="text-brand-soft h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
            </div>
          </div>

          <p className="text-brand-soft mt-10 font-mono text-[11px] tracking-[0.28em] uppercase">
            Capabilities
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.capabilities.map((cap) => (
              <li
                key={cap}
                className="text-ink rounded-full border border-hairline bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium leading-tight"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — content */}
        <div>
          <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
            {service.tag}
          </p>
          <h2 className="text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl">
            {service.title}
          </h2>
          <p className="text-ink mt-6 text-[19px] leading-[1.55] font-medium">{service.summary}</p>
          <div className="mt-8 space-y-6">
            {service.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-muted text-[15.5px] leading-[1.75]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
