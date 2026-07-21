'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, GitBranch, ShieldCheck, type LucideIcon } from 'lucide-react'

type FloatingCard = {
  Icon: LucideIcon
  title: string
  subtitle: string
  top: string
  right: string
  dur: number
  delay: number
  width: string
}

const CARDS: readonly FloatingCard[] = [
  {
    Icon: Cloud,
    title: 'Enterprise Cloud',
    subtitle: 'AWS · Azure · Hybrid',
    top: '22%',
    right: '4%',
    width: '220px',
    dur: 11,
    delay: 0.2,
  },
  {
    Icon: BrainCircuit,
    title: 'Artificial Intelligence',
    subtitle: 'ML · Predictive · GenAI',
    top: '40%',
    right: '24%',
    width: '230px',
    dur: 13.5,
    delay: 1.4,
  },
  {
    Icon: ShieldCheck,
    title: 'Cyber Security',
    subtitle: 'IAM · Zero-Trust',
    top: '62%',
    right: '3%',
    width: '210px',
    dur: 12,
    delay: 0.8,
  },
  {
    Icon: GitBranch,
    title: 'DevOps · CI/CD',
    subtitle: 'Pipelines · Automation',
    top: '82%',
    right: '22%',
    width: '220px',
    dur: 10.5,
    delay: 2,
  },
]

export function HeroFloatingCards() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] hidden lg:block"
    >
      {CARDS.map((card, i) => {
        const Icon = card.Icon
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 0.92, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.9,
              delay: 0.4 + i * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
            style={{ top: card.top, right: card.right, width: card.width }}
          >
            <div
              className="animate-float rounded-2xl p-4"
              style={{
                background: 'rgba(9, 16, 35, 0.55)',
                backdropFilter: 'blur(20px) saturate(140%)',
                WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                border: '1px solid rgba(120, 170, 255, 0.15)',
                boxShadow:
                  '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(79,140,255,0.10), inset 0 1px 0 rgba(255,255,255,0.05)',
                animationDuration: `${card.dur}s`,
                animationDelay: `${card.delay}s`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(120,170,255,0.22)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  <Icon className="text-brand-soft h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="text-ink truncate text-[13px] font-semibold">{card.title}</p>
                  <p className="text-ink-muted truncate font-mono text-[10px] tracking-[0.16em] uppercase">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
