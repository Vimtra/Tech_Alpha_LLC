import { motion } from 'framer-motion'

const CHIPS = [
  { label: 'AWS Certified', sub: 'Engineers' },
  { label: 'AI & Data', sub: 'Innovation' },
  { label: 'Enterprise', sub: 'Security' },
  { label: 'Managed', sub: 'Support · 24/7' },
]

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.65, 0.35, 1] } },
}

function HeroFeatureChips() {
  return (
    <motion.ul
      className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6"
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
      initial="hidden"
      animate="show"
    >
      {CHIPS.map((c) => (
        <motion.li key={c.label} variants={item} className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-white/[0.04] text-brand backdrop-blur-sm">
            <span className="text-ink-muted text-xl">•</span>
          </span>
          <span className="flex flex-col leading-snug">
            <span className="text-[13px] font-semibold text-ink">{c.label}</span>
            <span className="text-[12px] text-ink-muted">{c.sub}</span>
          </span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default HeroFeatureChips
