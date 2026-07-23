'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { consultingProcess } from '@/content/home'
import { AMBER_GRADIENT } from '@/lib/theme'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'

export function ConsultingProcess() {
  const { eyebrow, headline, description, steps } = consultingProcess

  return (
    <section
      id="process"
      aria-label="Consulting process"
      className="relative py-24 sm:py-32 lg:py-40"
    >
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

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 hidden h-px lg:block"
            style={{
              left: '5%',
              right: '5%',
              background:
                'linear-gradient(90deg, transparent, rgba(120,170,255,0.25) 15%, rgba(248,151,35,0.28) 55%, rgba(120,170,255,0.20) 85%, transparent)',
            }}
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Step marker */}
                <div className="flex items-center gap-4 lg:block">
                  <div
                    className="text-ink relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-mono text-lg font-semibold"
                    style={{
                      background:
                        'linear-gradient(rgba(9,16,35,0.55), rgba(9,16,35,0.55)) padding-box, ' +
                        'linear-gradient(135deg, rgba(120,170,255,0.35), rgba(248,151,35,0.18)) border-box',
                      border: '1px solid transparent',
                      backdropFilter: 'blur(18px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(18px) saturate(140%)',
                      boxShadow:
                        '0 0 30px rgba(79,140,255,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          AMBER_GRADIENT,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-ink text-xl font-semibold lg:mt-6">{step.title}</h3>
                </div>
                <p className="text-ink-muted mt-3 pl-20 text-[14.5px] leading-[1.65] lg:pl-0">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
