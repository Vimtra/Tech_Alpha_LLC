import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.65, 0.35, 1] } },
}

function HeroContent() {
  return (
    <motion.div className="relative z-10 max-w-2xl" variants={container} initial="hidden" animate="show">
      {/* Badge */}
      <motion.div variants={item}>
        <span className="inline-flex h-10 items-center gap-2.5 rounded-pill border border-hairline bg-white/[0.04] px-4 text-[13px] font-medium text-ink-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_10px_rgba(248,151,35,0.7)]" />
          <span className="font-mono uppercase tracking-[0.18em]">
            AWS Certified &middot; AI-Driven &middot; Enterprise Solutions
          </span>
        </span>
      </motion.div>

      {/* Display headline */}
      <motion.h1
        variants={item}
        className="mt-6 font-bold leading-[1.08] tracking-tight text-ink"
        style={{ fontSize: 'clamp(2.5rem, 2.6vw + 1rem, 4.25rem)' }}
      >
        Engineering the future with{' '}
        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)' }}>
          Cloud &amp; AI
        </span>{' '}
        Enterprise Solutions.
      </motion.h1>

      {/* Description */}
      <motion.p variants={item} className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-ink-muted sm:text-lg">
        Tech Alpha LLC empowers businesses with secure cloud engineering, AI-powered innovation, DevOps
        excellence, and digital transformation for lasting impact.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          to="/contact"
          className="group relative inline-flex h-14 items-center justify-between gap-4 rounded-pill bg-brand-gradient pl-6 pr-2 text-[15px] font-semibold text-[#12161F] shadow-brand transition duration-300 hover:-translate-y-0.5 hover:shadow-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          {/* Outer glow ring — grows on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 -z-10 rounded-pill opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg"
            style={{ background: 'radial-gradient(closest-side, rgba(248,151,35,0.55), transparent 75%)' }}
          />
          <span className="whitespace-nowrap">Schedule a Consultation</span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12161F] text-brand transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">
            <span className="text-brand text-lg">→</span>
          </span>
        </Link>

        <Link
          to="/services"
          className="group relative inline-flex h-14 items-center gap-3 rounded-pill border border-hairline bg-white/[0.05] pl-2 pr-6 text-[15px] font-semibold text-ink backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 -z-10 rounded-pill opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgba(0,194,255,0.35), transparent 75%)' }}
          />
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-ink transition group-hover:border-aurora-cyan/50 group-hover:bg-white/[0.12]" aria-hidden="true">
            <span className="translate-x-[1px]">►</span>
          </span>
          <span className="whitespace-nowrap">Explore Our Services</span>
        </Link>
      </motion.div>

      {/* Feature chips removed per request */}
    </motion.div>
  )
}

export default HeroContent
