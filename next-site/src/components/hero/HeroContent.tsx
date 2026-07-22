'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { heroContent } from '@/content/home'

const container: Variants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.65, 0.35, 1] } },
}

export function HeroContent() {
  const { eyebrow, headline, description, ctas } = heroContent

  return (
    <motion.div
      className="relative z-10 max-w-2xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <span className="text-ink-muted inline-flex h-10 items-center gap-2.5 rounded-pill border border-hairline bg-white/[0.04] px-4 text-[13px] font-medium backdrop-blur-sm">
          <span className="bg-brand h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_10px_rgba(248,151,35,0.7)]" />
          <span className="font-mono tracking-[0.18em] uppercase">{eyebrow}</span>
        </span>
      </motion.div>

      <motion.h1
        variants={item}
        className="text-ink mt-6 leading-[1.08] font-bold tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 2.6vw + 1rem, 4.25rem)' }}
      >
        {headline.lead}{' '}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)' }}
        >
          {headline.accent}
        </span>
        {headline.tail}
      </motion.h1>

      <motion.p
        variants={item}
        className="text-ink-muted mt-6 max-w-[520px] text-[17px] leading-[1.7] sm:text-lg"
      >
        {description}
      </motion.p>

      <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={ctas.primary.to}
          className="group focus-visible:ring-brand focus-visible:ring-offset-canvas relative inline-flex h-14 items-center justify-between gap-4 rounded-pill bg-brand-gradient pr-2 pl-6 text-[15px] font-semibold text-[#12161F] transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          style={{
            boxShadow: '0 8px 24px rgba(248, 151, 35, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 -z-10 rounded-pill opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg"
            style={{
              background: 'radial-gradient(closest-side, rgba(248,151,35,0.55), transparent 75%)',
            }}
          />
          <span className="whitespace-nowrap">{ctas.primary.label}</span>
          <span
            aria-hidden="true"
            className="text-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12161F] transition duration-300 group-hover:translate-x-0.5"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </Link>

        <Link
          href={ctas.secondary.to}
          className="group text-ink focus-visible:ring-brand focus-visible:ring-offset-canvas relative inline-flex h-14 items-center gap-3 rounded-pill border border-hairline bg-white/[0.05] pr-6 pl-2 text-[15px] font-semibold backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/40 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 -z-10 rounded-pill opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgba(0,194,255,0.35), transparent 75%)' }}
          />
          <span
            aria-hidden="true"
            className="text-ink flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] transition group-hover:border-aurora-cyan/50 group-hover:bg-white/[0.12]"
          >
            <Play className="h-4 w-4 translate-x-[1px]" strokeWidth={2.5} fill="currentColor" />
          </span>
          <span className="whitespace-nowrap">{ctas.secondary.label}</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
