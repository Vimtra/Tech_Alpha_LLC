'use client'

import { useRef } from 'react'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'
import { HeroFloatingCards } from './HeroFloatingCards'

/**
 * Navbar sits sticky at top-0 with a ~92px total footprint (68px min-height + 12px pt + 12px hairline).
 * We pull the Hero up by that amount and repad it so the background stack fills the space behind the
 * navbar seamlessly — no black band between the two.
 */
const NAV_OVERLAP = 92

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden"
      style={{
        marginTop: `-${NAV_OVERLAP}px`,
        paddingTop: `${NAV_OVERLAP}px`,
        minHeight: `calc(clamp(560px, 85vh, 960px) + ${NAV_OVERLAP}px)`,
      }}
      aria-label="Hero — Tech Alpha LLC"
    >
      <HeroBackground sectionRef={sectionRef} />
      <HeroFloatingCards />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center gap-8 px-6 py-12 lg:px-10 lg:py-6 xl:gap-6">
        <HeroContent />
      </div>
    </section>
  )
}
