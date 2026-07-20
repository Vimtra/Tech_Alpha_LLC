import { useEffect } from 'react'
import useReducedMotion from '../../../hooks/useReducedMotion'

/**
 * Ordered background stack for the hero, matching the audit:
 *   -z-20  base canvas
 *   -z-19  tech grid overlay (parallaxed on scroll)
 *   -z-18  radial blue mesh
 *   -z-17  drifting aurora streaks
 *   -z-16  floating blur shapes + particles + noise + vignette
 *
 * The whole stack is fully behind hero content thanks to the section's
 * `isolate` stacking context. `sectionRef` is used to sync the grid to
 * scroll depth (light parallax); no-op under reduced motion.
 */

// Denser particle field — ~30 points, hand-scattered to avoid grid feel.
const PARTICLES = [
  { x: 6, y: 22, s: 2.5, d: 8, delay: 0, c: 'rgba(0,194,255,0.7)' },
  { x: 84, y: 12, s: 2, d: 9, delay: 1.2, c: 'rgba(127,227,255,0.65)' },
  { x: 70, y: 82, s: 3, d: 7.5, delay: 0.5, c: 'rgba(248,151,35,0.7)' },
  { x: 20, y: 74, s: 2, d: 10, delay: 2, c: 'rgba(79,140,255,0.65)' },
  { x: 92, y: 52, s: 3, d: 7, delay: 0.8, c: 'rgba(0,194,255,0.7)' },
  { x: 44, y: 4, s: 2, d: 11, delay: 1.8, c: 'rgba(255,255,255,0.5)' },
  { x: 5, y: 48, s: 2.5, d: 8.5, delay: 0.3, c: 'rgba(0,194,255,0.7)' },
  { x: 56, y: 94, s: 2, d: 9.5, delay: 2.4, c: 'rgba(79,140,255,0.65)' },
  { x: 78, y: 32, s: 2.2, d: 8, delay: 1, c: 'rgba(255,255,255,0.45)' },
  { x: 32, y: 40, s: 2, d: 10.5, delay: 1.5, c: 'rgba(0,194,255,0.55)' },
  { x: 94, y: 78, s: 2, d: 9, delay: 0.6, c: 'rgba(127,227,255,0.65)' },
  { x: 4, y: 88, s: 2.4, d: 7.8, delay: 2.1, c: 'rgba(248,151,35,0.55)' },
  { x: 88, y: 66, s: 1.8, d: 9.2, delay: 1.7, c: 'rgba(255,255,255,0.5)' },
  { x: 14, y: 58, s: 2, d: 10.2, delay: 0.9, c: 'rgba(79,140,255,0.65)' },
  { x: 62, y: 20, s: 2.2, d: 8.6, delay: 2.3, c: 'rgba(0,194,255,0.65)' },
  { x: 36, y: 88, s: 1.8, d: 9.8, delay: 0.4, c: 'rgba(255,255,255,0.45)' },
  { x: 46, y: 62, s: 2, d: 10, delay: 1.3, c: 'rgba(79,140,255,0.6)' },
  { x: 74, y: 52, s: 2.4, d: 8.4, delay: 0.7, c: 'rgba(248,151,35,0.55)' },
  { x: 26, y: 16, s: 1.6, d: 9, delay: 0.5, c: 'rgba(127,227,255,0.6)' },
  { x: 58, y: 42, s: 1.8, d: 10.4, delay: 1.1, c: 'rgba(0,194,255,0.5)' },
  { x: 82, y: 84, s: 2, d: 8.2, delay: 1.9, c: 'rgba(255,255,255,0.4)' },
  { x: 10, y: 66, s: 1.6, d: 9.6, delay: 2.2, c: 'rgba(0,194,255,0.6)' },
  { x: 66, y: 8, s: 2, d: 10, delay: 0.2, c: 'rgba(127,227,255,0.55)' },
  { x: 38, y: 22, s: 1.7, d: 8.8, delay: 1.6, c: 'rgba(79,140,255,0.55)' },
  { x: 24, y: 92, s: 1.6, d: 9.4, delay: 0.4, c: 'rgba(255,255,255,0.35)' },
  { x: 96, y: 30, s: 2, d: 7.6, delay: 1.4, c: 'rgba(0,194,255,0.6)' },
  { x: 52, y: 78, s: 1.8, d: 9.8, delay: 2.0, c: 'rgba(248,151,35,0.5)' },
  { x: 16, y: 34, s: 1.6, d: 10.6, delay: 0.6, c: 'rgba(127,227,255,0.55)' },
  { x: 72, y: 66, s: 1.8, d: 8.6, delay: 1.3, c: 'rgba(255,255,255,0.4)' },
  { x: 40, y: 54, s: 1.6, d: 9.2, delay: 0.9, c: 'rgba(0,194,255,0.55)' },
]

// SVG noise stays as a data URI so the CSP-clean pane can render it.
const NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

function HeroBackground({ sectionRef }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    const el = sectionRef?.current
    if (!el) return undefined
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      el.style.setProperty('--hero-scroll-y', `${y * 0.35}px`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [sectionRef, reduced])

  return (
    <>
      {/* 1 — Base canvas */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#050816]" />

      {/* 2 — Technology grid, radial-masked, parallaxed on scroll */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-19"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(79,140,255,0.055) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgba(79,140,255,0.055) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, #000 45%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, #000 45%, transparent 100%)',
          transform: 'translate3d(0, calc(var(--hero-scroll-y, 0px) * 0.4), 0)',
          willChange: 'transform',
        }}
      />

      {/* 3 — Radial blue mesh behind the globe — deeper, multi-source */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-18"
        style={{
          background:
            'radial-gradient(ellipse 68% 56% at 70% 45%, rgba(0,194,255,0.22) 0%, transparent 70%),' +
            'radial-gradient(ellipse 46% 46% at 28% 42%, rgba(79,140,255,0.16) 0%, transparent 72%),' +
            'radial-gradient(circle 40% at 50% 100%, rgba(248,151,35,0.09) 0%, transparent 70%)',
          transform: 'translate3d(0, calc(var(--hero-scroll-y, 0px) * 0.2), 0)',
        }}
      />

      {/* 3b — Central cyan bloom directly behind the globe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-18 rounded-full animate-pulse-glow"
        style={{
          top: '18%',
          right: '6%',
          width: '46rem',
          height: '46rem',
          background:
            'radial-gradient(circle at center, rgba(0,194,255,0.35) 0%, rgba(79,140,255,0.22) 32%, rgba(0,194,255,0.08) 55%, transparent 72%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 4 — Aurora streaks, painterly and slow */}
      <div aria-hidden="true" className="absolute inset-0 -z-17 overflow-hidden">
        <div
          className="absolute -top-[8%] -left-[15%] h-[46%] w-[130%] rounded-full mix-blend-screen"
          style={{
            background:
              'linear-gradient(100deg, transparent 10%, rgba(0,194,255,0.45) 38%, rgba(127,227,255,0.36) 52%, rgba(248,151,35,0.24) 66%, transparent 88%)',
            filter: 'blur(55px)',
            animation: 'hero-streak 26s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[16%] -right-[15%] h-[42%] w-[90%] rounded-full mix-blend-screen"
          style={{
            background:
              'linear-gradient(120deg, transparent 15%, rgba(0,194,255,0.38) 48%, rgba(79,140,255,0.28) 72%, transparent 95%)',
            filter: 'blur(65px)',
            animation: 'hero-streak-alt 32s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[55%] left-[10%] h-[30%] w-[70%] rounded-full mix-blend-screen opacity-70"
          style={{
            background:
              'linear-gradient(80deg, transparent 20%, rgba(79,140,255,0.28) 55%, rgba(0,194,255,0.2) 75%, transparent 95%)',
            filter: 'blur(70px)',
            animation: 'hero-streak 34s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* 5 — Floating blur shapes, particles, noise, vignette */}
      <div aria-hidden="true" className="absolute inset-0 -z-16 overflow-hidden">
        {[
          { s: 220, t: '8%', l: '55%', c: 'rgba(79,140,255,0.09)', b: 60, d: 18 },
          { s: 170, t: '55%', l: '5%', c: 'rgba(0,194,255,0.08)', b: 55, d: 22 },
          { s: 140, t: '22%', l: '42%', c: 'rgba(248,151,35,0.06)', b: 50, d: 14 },
        ].map((sh, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: sh.s,
              height: sh.s,
              top: sh.t,
              left: sh.l,
              background: sh.c,
              filter: `blur(${sh.b}px)`,
              animation: `float ${sh.d}s ease-in-out ${i * 2.5}s infinite`,
            }}
          />
        ))}

        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              background: p.c,
              animationDuration: `${p.d}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.045] mix-blend-overlay" style={{ backgroundImage: NOISE }} />

        {/* Soft vignette + edge darken for cinematic seating */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-5%,transparent_40%,rgba(5,8,22,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent_45%,rgba(2,4,14,0.7)_100%)]" />
      </div>
    </>
  )
}

export default HeroBackground
