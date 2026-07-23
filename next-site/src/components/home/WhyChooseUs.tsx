'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Headphones,
  Layers,
  Route,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { whyChooseUs } from '@/content/home'
import { AMBER_GRADIENT } from '@/lib/theme'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'

const ICONS: Record<string, LucideIcon> = {
  users: Users,
  headphones: Headphones,
  route: Route,
  wrench: Wrench,
  building: Building2,
  layers: Layers,
}

export function WhyChooseUs() {
  const { eyebrow, headline, description, items } = whyChooseUs

  return (
    <section
      id="why-choose-us"
      aria-label="Why choose Tech Alpha"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Sticky heading column */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <GradientHeading
              as="h2"
              lead={headline.lead}
              accent={headline.accent}
              tail={headline.tail}
              className="mt-6"
            />
            <p className="text-ink-muted mt-6 max-w-md text-[17px] leading-[1.65]">{description}</p>
          </div>

          {/* Numbered items — split into 2 columns on desktop for rhythm */}
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {items.map((item, i) => {
              const Icon = ICONS[item.iconName] ?? Users
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className="bg-clip-text font-mono text-sm font-bold tracking-tight text-transparent"
                      style={{
                        backgroundImage:
                          AMBER_GRADIENT,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(120,170,255,0.30), rgba(120,170,255,0)',
                      }}
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(120,170,255,0.20)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                      }}
                    >
                      <Icon className="text-brand-soft h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="text-ink text-lg font-semibold tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-ink-muted mt-4 text-[14.5px] leading-[1.65]">
                    {item.description}
                  </p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
