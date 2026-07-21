'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, CloudCog, Layers, type LucideIcon } from 'lucide-react'
import type { ServiceIconName, ServicePreview } from '@/content/services'

const ICONS: Record<ServiceIconName, LucideIcon> = {
  cloud: CloudCog,
  brain: BrainCircuit,
  layers: Layers,
}

type Props = ServicePreview & { index: number }

const cardBg =
  'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
  'linear-gradient(135deg, rgba(120,170,255,0.28) 0%, rgba(120,170,255,0.06) 50%, rgba(248,151,35,0.10) 100%) border-box'

const hoverGlow =
  'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(79,140,255,0.16) 0%, transparent 70%), ' +
  'radial-gradient(ellipse 70% 60% at 100% 100%, rgba(248,151,35,0.10) 0%, transparent 70%)'

export function ServiceCard({ tag, title, description, iconName, href, index }: Props) {
  const Icon = ICONS[iconName]

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative h-full"
    >
      <Link
        href={href}
        aria-label={`${title} — learn more`}
        className="focus-visible:ring-brand focus-visible:ring-offset-canvas relative block h-full overflow-hidden rounded-[28px] p-8 transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-10 group-hover:shadow-[0_30px_80px_rgba(79,140,255,0.15)]"
        style={{
          background: cardBg,
          border: '1px solid transparent',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        {/* Hover glow layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: hoverGlow }}
        />

        {/* Top hairline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
          }}
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Icon tile */}
          <div
            className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 will-change-transform group-hover:scale-105 group-hover:rotate-3"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(120,170,255,0.18)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <Icon className="text-brand-soft h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
          </div>

          {/* Tag */}
          <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
            {tag}
          </p>

          {/* Title */}
          <h3 className="text-ink mt-3 text-2xl font-semibold tracking-tight sm:text-[1.6rem]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-ink-muted mt-4 text-[15px] leading-[1.7]">{description}</p>

          {/* Spacer + arrow row */}
          <div className="mt-auto flex items-center gap-2 pt-10 text-sm font-semibold text-brand">
            <span>Learn more</span>
            <span className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand/20 bg-brand/[0.06] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-brand/40 group-hover:bg-brand/[0.12]">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
