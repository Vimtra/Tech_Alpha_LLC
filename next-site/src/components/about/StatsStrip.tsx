'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { stats } from '@/content/about'
import { AMBER_GRADIENT, glassCardStyle } from '@/lib/theme'

export function StatsStrip() {
  return (
    <section aria-label="Enterprise scale in numbers" className="relative py-16">
      <Container size="wide" className="max-w-[1440px]">
        <div
          className="relative overflow-hidden rounded-[24px] px-6 py-14 sm:px-10"
          style={{
            ...glassCardStyle({
              borderGradient:
                'linear-gradient(135deg, rgba(120,170,255,0.30) 0%, rgba(120,170,255,0.05) 55%, rgba(248,151,35,0.15) 100%)',
              blur: 22,
            }),
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 90% at 20% 50%, rgba(79,140,255,0.18) 0%, transparent 60%),' +
                'radial-gradient(ellipse 60% 90% at 80% 50%, rgba(248,151,35,0.12) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 grid divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start px-4 py-6 sm:px-8"
              >
                <span
                  className="bg-clip-text font-bold tracking-tight text-transparent"
                  style={{
                    backgroundImage:
                      AMBER_GRADIENT,
                    fontSize: 'clamp(2.75rem, 4.2vw + 1rem, 5rem)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-ink-muted mt-4 max-w-[220px] text-sm leading-relaxed">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
