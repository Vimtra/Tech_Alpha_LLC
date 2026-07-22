'use client'

import { motion } from 'framer-motion'
import {
  Box,
  CircuitBoard,
  Cloud,
  GitBranch,
  Settings2,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { technologies } from '@/content/home'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  gitBranch: GitBranch,
  settings: Settings2,
  box: Box,
  circuitBoard: CircuitBoard,
}

export function Technologies() {
  const { eyebrow, headline, description, groups } = technologies

  return (
    <section id="technologies" aria-label="Technologies" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide" className="max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow className="mx-auto inline-block">{eyebrow}</SectionEyebrow>
          <GradientHeading
            as="h2"
            lead={headline.lead}
            accent={headline.accent}
            tail={headline.tail}
            className="mt-6"
          />
          <p className="text-ink-muted mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-[1200px] overflow-hidden rounded-[28px] p-6 sm:mt-20 sm:p-10"
          style={{
            background:
              'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
              'linear-gradient(135deg, rgba(120,170,255,0.30) 0%, rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.12) 100%) border-box',
            border: '1px solid transparent',
            backdropFilter: 'blur(22px) saturate(140%)',
            WebkitBackdropFilter: 'blur(22px) saturate(140%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 100% at 20% 50%, rgba(79,140,255,0.14) 0%, transparent 70%),' +
                'radial-gradient(ellipse 60% 100% at 80% 50%, rgba(248,151,35,0.10) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:divide-x lg:divide-white/[0.06]">
            {groups.map((group) => {
              const Icon = ICONS[group.iconName] ?? Box
              return (
                <div key={group.label} className="min-w-0 lg:px-5 lg:first:pl-0 lg:last:pr-0">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(120,170,255,0.18)',
                      }}
                    >
                      <Icon
                        className="text-brand-soft h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-brand-soft font-mono text-[10px] tracking-[0.24em] uppercase">
                      {group.label}
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-ink rounded-full border border-hairline bg-white/[0.03] px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
