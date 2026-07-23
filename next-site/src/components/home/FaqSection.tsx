'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { faqItems } from '@/content/faq'
import { cn } from '@/lib/cn'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <Container size="wide" className="max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow className="mx-auto inline-block">FAQ</SectionEyebrow>
          <GradientHeading
            as="h2"
            lead="Common questions from"
            accent="enterprise buyers"
            tail="."
            className="mt-6"
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(9,16,35,0.35)',
                  border: '1px solid rgba(120,170,255,0.12)',
                  backdropFilter: 'blur(18px) saturate(140%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(140%)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-header-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <span className="text-ink text-[16px] font-semibold">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'text-brand-soft inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-white/[0.03] transition',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-muted px-6 pb-6 text-[15px] leading-[1.7]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
