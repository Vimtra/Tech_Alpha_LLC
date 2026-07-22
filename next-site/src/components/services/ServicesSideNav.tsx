'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { servicesFullDetail } from '@/content/services'

export function ServicesSideNav() {
  const [active, setActive] = useState(servicesFullDetail[0]?.slug ?? '')

  useEffect(() => {
    const sections = servicesFullDetail
      .map((s) => document.getElementById(s.slug))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      aria-label="Services navigation"
      className="hidden lg:sticky lg:top-32 lg:block lg:h-fit"
    >
      <p className="text-brand-soft font-mono text-[10px] tracking-[0.28em] uppercase">
        Capabilities
      </p>
      <ol className="mt-6 space-y-1">
        {servicesFullDetail.map((s) => {
          const isActive = active === s.slug
          return (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className={cn(
                  'group flex items-baseline gap-3 rounded-lg px-3 py-2 text-[13.5px] transition duration-300',
                  isActive
                    ? 'text-ink bg-white/[0.05]'
                    : 'text-ink-muted hover:text-ink hover:bg-white/[0.03]',
                )}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'font-mono text-[10px] tracking-[0.16em] transition',
                    isActive ? 'text-brand-soft' : 'text-ink-faint group-hover:text-brand-soft/70',
                  )}
                >
                  {s.number}
                </span>
                <span className="flex-1 leading-tight">{s.title}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="bg-brand-soft h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_10px_rgba(255,209,138,0.8)]"
                  />
                )}
              </a>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}
