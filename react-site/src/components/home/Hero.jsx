import { useRef } from 'react'
import HeroBackground from './hero/HeroBackground'
import HeroContent from './hero/HeroContent'

/**
 * Hero — Tech Alpha LLC
 * Split 45 / 55 layout. Message + CTAs left; dot-matrix enterprise globe right.
 * Height clamps between 560px and 960px, tracking 85vh — the next section
 * peeks below without excess dead space.
 * Full background stack lives in HeroBackground; parallax + globe render live
 * inside the section so their pointer/scroll listeners scope to it.
 */
function Hero() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden"
      style={{ minHeight: 'clamp(560px, 85vh, 960px)' }}
      aria-label="Hero — Tech Alpha LLC"
    >
      <HeroBackground sectionRef={sectionRef} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center gap-8 px-6 py-12 lg:px-10 lg:py-6 xl:gap-6">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
