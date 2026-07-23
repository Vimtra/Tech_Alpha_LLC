'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { clients, type Client } from '@/content/clients'
import { cn } from '@/lib/cn'

function useIndustries(list: readonly Client[]): string[] {
  return useMemo(() => {
    const set = new Set<string>()
    list.forEach((c) => set.add(c.industry))
    return Array.from(set).sort()
  }, [list])
}

export function ClientsGrid() {
  const industries = useIndustries(clients)
  const [active, setActive] = useState<string>('All')

  const filtered = useMemo(
    () => (active === 'All' ? clients : clients.filter((c) => c.industry === active)),
    [active],
  )

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter clients by industry">
        <button
          type="button"
          role="tab"
          aria-selected={active === 'All'}
          onClick={() => setActive('All')}
          className={cn(
            'inline-flex h-9 items-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em] transition',
            active === 'All'
              ? 'border-brand/40 bg-brand/[0.10] text-brand-soft'
              : 'border-hairline bg-white/[0.03] text-ink-muted hover:border-white/20 hover:text-ink',
          )}
        >
          All · {clients.length}
        </button>
        {industries.map((ind) => (
          <button
            key={ind}
            type="button"
            role="tab"
            aria-selected={active === ind}
            onClick={() => setActive(ind)}
            className={cn(
              'inline-flex h-9 items-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.16em] transition',
              active === ind
                ? 'border-brand/40 bg-brand/[0.10] text-brand-soft'
                : 'border-hairline bg-white/[0.03] text-ink-muted hover:border-white/20 hover:text-ink',
            )}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((client, i) => (
          <motion.article
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (i % 6) * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-2xl p-7"
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
            <p className="text-brand-soft font-mono text-[10px] tracking-[0.24em] uppercase">
              {client.industry}
            </p>
            <h3 className="text-ink mt-3 text-xl font-semibold leading-tight">{client.name}</h3>
            <p
              className="text-aurora-cyan mt-3 inline-flex rounded-full border border-hairline bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase"
            >
              {client.service}
            </p>
            <p className="text-ink-muted mt-4 text-[14px] leading-[1.65]">{client.description}</p>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted mt-16 text-center text-sm" role="status">
          No engagements matching that industry.
        </p>
      )}
    </div>
  )
}
