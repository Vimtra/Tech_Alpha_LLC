'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { industriesSection } from '@/content/about'
import { clients } from '@/content/clients'
import { cn } from '@/lib/cn'

// Bento layout — 8 tiles with varied spans
const SPAN_CLASSES: readonly string[] = [
  'lg:col-span-2 lg:row-span-2', // ORIX (feature)
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-2', // Airbnb tall
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1', // Toyota wide
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1', // Walmart wide
]

export function IndustriesClients() {
  const { eyebrow, headline, description, marqueeItems } = industriesSection
  // Duplicate items so the marquee loops seamlessly with -50% translate
  const marqueeLoop = [...marqueeItems, ...marqueeItems]

  return (
    <section aria-label="Industries and clients" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide" className="max-w-[1440px]">
        <div className="max-w-3xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <GradientHeading
            as="h2"
            lead={headline.lead}
            accent={headline.accent}
            tail={headline.tail}
            className="mt-6"
          />
          <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">{description}</p>
        </div>
      </Container>

      {/* Full-bleed industries marquee */}
      <div
        aria-hidden="true"
        className="relative mt-16 overflow-hidden py-6 sm:mt-20"
        style={{
          borderTop: '1px solid rgba(120,170,255,0.10)',
          borderBottom: '1px solid rgba(120,170,255,0.10)',
          background:
            'linear-gradient(90deg, rgba(9,16,35,0.35) 0%, rgba(9,16,35,0.15) 50%, rgba(9,16,35,0.35) 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40"
          style={{
            background: 'linear-gradient(90deg, var(--color-canvas), transparent)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40"
          style={{
            background: 'linear-gradient(-90deg, var(--color-canvas), transparent)',
          }}
        />
        <div className="animate-marquee motion-reduce:animate-none flex w-max items-center gap-14 whitespace-nowrap will-change-transform">
          {marqueeLoop.map((item, i) => (
            <span
              key={i}
              className="text-ink-muted flex shrink-0 items-center gap-14 font-mono text-lg tracking-[0.24em] uppercase sm:text-xl"
            >
              {item}
              <span className="text-brand-soft" aria-hidden="true">
                ●
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Bento grid of clients */}
      <Container size="wide" className="mt-16 max-w-[1440px] sm:mt-20">
        <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[200px]">
          {clients.map((client, i) => (
            <motion.article
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.06 + Math.floor(i / 4) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6',
                SPAN_CLASSES[i],
              )}
              style={{
                background:
                  'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
                  'linear-gradient(135deg, rgba(120,170,255,0.24) 0%, rgba(120,170,255,0.05) 100%) border-box',
                border: '1px solid transparent',
                backdropFilter: 'blur(18px) saturate(140%)',
                WebkitBackdropFilter: 'blur(18px) saturate(140%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Featured tile decorative glow */}
              {i === 0 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1/3 -right-1/3 h-[80%] w-[80%] rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(79,140,255,0.22) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                  }}
                />
              )}
              <div className="relative z-10">
                <p className="text-brand-soft font-mono text-[10px] tracking-[0.24em] uppercase">
                  {client.industry}
                </p>
                <h3
                  className={cn(
                    'text-ink mt-3 font-semibold leading-tight',
                    i === 0 ? 'text-3xl sm:text-[2rem]' : 'text-lg',
                  )}
                >
                  {client.name}
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-ink-muted text-[13px] leading-[1.6]">{client.description}</p>
                <p
                  className="text-aurora-cyan mt-3 inline-flex rounded-full border border-hairline bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase"
                >
                  {client.service}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

