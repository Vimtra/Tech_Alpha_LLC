'use client'

import { motion } from 'framer-motion'
import { Compass, Sparkles, Target, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { missionVisionCulture } from '@/content/about'

const ICONS: Record<string, LucideIcon> = {
  target: Target,
  compass: Compass,
  sparkles: Sparkles,
}

export function MissionVisionCulture() {
  const { eyebrow, headline, items } = missionVisionCulture

  return (
    <section aria-label="Mission, vision, and culture" className="relative py-[140px]">
      <Container size="wide" className="max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Sticky header column */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <GradientHeading
              as="h2"
              lead={headline.lead}
              accent={headline.accent}
              tail={headline.tail}
              className="mt-6"
            />
            <p className="text-ink-muted mt-6 max-w-md text-[17px] leading-[1.65]">
              Three statements from the official Tech Alpha positioning — the compass we return to on
              every engagement.
            </p>
          </div>

          {/* Numbered vertical rail */}
          <ol className="relative space-y-14">
            {/* Vertical connector */}
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-[27px] w-px"
              style={{
                background:
                  'linear-gradient(180deg, rgba(120,170,255,0.35) 0%, rgba(248,151,35,0.25) 50%, rgba(120,170,255,0.20) 100%)',
              }}
            />
            {items.map((item, i) => {
              const Icon = ICONS[item.iconName] ?? Target
              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Icon node */}
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        'linear-gradient(rgba(9,16,35,0.85), rgba(9,16,35,0.85)) padding-box, ' +
                        'linear-gradient(135deg, rgba(120,170,255,0.55), rgba(248,151,35,0.30)) border-box',
                      border: '1px solid transparent',
                      backdropFilter: 'blur(20px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                      boxShadow:
                        '0 0 30px rgba(79,140,255,0.20), inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <Icon className="text-brand-soft h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-4">
                      <span
                        className="bg-clip-text font-mono text-sm font-bold tracking-tight text-transparent"
                        style={{
                          backgroundImage:
                            'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)',
                        }}
                      >
                        0{i + 1}
                      </span>
                      <span className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
                        {item.label}
                      </span>
                    </div>
                    <blockquote
                      className="text-ink mt-5 font-semibold tracking-tight"
                      style={{
                        fontSize: 'clamp(1.25rem, 1vw + 0.9rem, 1.75rem)',
                        lineHeight: 1.35,
                      }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
