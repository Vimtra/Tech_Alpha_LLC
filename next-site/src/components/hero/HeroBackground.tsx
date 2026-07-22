'use client'

import { useEffect, type RefObject } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Particle = { x: number; y: number; s: number; d: number; delay: number; c: string }

const PARTICLES: readonly Particle[] = [
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

const BLOBS = [
  { s: 220, t: '8%', l: '55%', c: 'rgba(79,140,255,0.09)', b: 60, d: 18 },
  { s: 170, t: '55%', l: '5%', c: 'rgba(0,194,255,0.08)', b: 55, d: 22 },
  { s: 140, t: '22%', l: '42%', c: 'rgba(248,151,35,0.06)', b: 50, d: 14 },
] as const

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

type Props = { sectionRef: RefObject<HTMLElement | null> }

export function HeroBackground({ sectionRef }: Props) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const el = sectionRef.current
    if (!el) return
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
      {/* Base canvas is provided by the shared AuroraBackground so every section reads the same. */}

      {/* Tech grid, radial-masked, parallaxed on scroll */}
      <div
        aria-hidden="true"
        className="-z-[19] absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(79,140,255,0.055) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgba(79,140,255,0.055) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 0%, #000 45%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, #000 45%, transparent 100%)',
          transform: 'translate3d(0, calc(var(--hero-scroll-y, 0px) * 0.4), 0)',
          willChange: 'transform',
        }}
      />

      {/* 3 — Radial blue mesh behind content */}
      <div
        aria-hidden="true"
        className="-z-[18] absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 68% 56% at 70% 45%, rgba(0,194,255,0.22) 0%, transparent 70%),' +
            'radial-gradient(ellipse 46% 46% at 28% 42%, rgba(79,140,255,0.16) 0%, transparent 72%),' +
            'radial-gradient(circle 40% at 50% 100%, rgba(248,151,35,0.09) 0%, transparent 70%)',
          transform: 'translate3d(0, calc(var(--hero-scroll-y, 0px) * 0.2), 0)',
        }}
      />

      {/* 3b — Central cyan bloom */}
      <div
        aria-hidden="true"
        className="hero-motion animate-pulse-glow pointer-events-none absolute -z-[18] rounded-full"
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

      {/* 4 — Aurora streaks */}
      <div aria-hidden="true" className="hero-motion -z-[17] absolute inset-0 overflow-hidden">
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
          className="absolute top-[55%] left-[10%] h-[30%] w-[70%] rounded-full opacity-70 mix-blend-screen"
          style={{
            background:
              'linear-gradient(80deg, transparent 20%, rgba(79,140,255,0.28) 55%, rgba(0,194,255,0.2) 75%, transparent 95%)',
            filter: 'blur(70px)',
            animation: 'hero-streak 34s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* 5 — Floating blobs, particles, noise, vignette */}
      <div aria-hidden="true" className="hero-detail-motion -z-[16] absolute inset-0 overflow-hidden">
        {BLOBS.map((sh, i) => (
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
            className="animate-float absolute rounded-full"
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

        <div
          className="absolute inset-0 mix-blend-overlay opacity-[0.045]"
          style={{ backgroundImage: NOISE_SVG }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-5%,transparent_40%,rgba(5,8,22,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent_45%,rgba(2,4,14,0.7)_100%)]" />
      </div>

      {/* 6 — Right-side ambient composition: soft glass orbs, light streaks, tech lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[15] hidden overflow-hidden lg:block">
        {/* Soft glass blur circles clustered on the right */}
        {[
          { s: 90, t: '12%', r: '18%', c: 'rgba(79,140,255,0.16)', b: 24, d: 12 },
          { s: 60, t: '46%', r: '32%', c: 'rgba(0,194,255,0.14)', b: 18, d: 14 },
          { s: 110, t: '68%', r: '10%', c: 'rgba(79,140,255,0.12)', b: 30, d: 16 },
          { s: 44, t: '25%', r: '8%', c: 'rgba(0,194,255,0.18)', b: 14, d: 11 },
          { s: 70, t: '86%', r: '30%', c: 'rgba(127,227,255,0.10)', b: 22, d: 18 },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: o.s,
              height: o.s,
              top: o.t,
              right: o.r,
              background: o.c,
              filter: `blur(${o.b}px)`,
              animation: `float ${o.d}s ease-in-out ${i * 1.6}s infinite`,
            }}
          />
        ))}

        {/* Straight diagonal light streaks — thin, warm/blue mix */}
        {[
          { t: '22%', r: '-6%', w: '520px', rot: -12, c: 'rgba(0,194,255,0.42)', o: 0.5 },
          { t: '52%', r: '-4%', w: '460px', rot: -14, c: 'rgba(127,227,255,0.35)', o: 0.45 },
          { t: '74%', r: '-2%', w: '400px', rot: -10, c: 'rgba(248,151,35,0.22)', o: 0.4 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: s.t,
              right: s.r,
              width: s.w,
              backgroundImage: `linear-gradient(90deg, transparent, ${s.c}, transparent)`,
              transform: `rotate(${s.rot}deg)`,
              transformOrigin: 'right center',
              filter: 'blur(0.6px)',
              opacity: s.o,
            }}
          />
        ))}

        {/* Low-opacity technology lines — SVG circuit-like paths on the right */}
        <svg
          className="absolute inset-y-0 right-0 h-full w-[52%] opacity-[0.18]"
          viewBox="0 0 700 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="techLineA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(79,140,255,0.0)" />
              <stop offset="30%" stopColor="rgba(79,140,255,0.9)" />
              <stop offset="100%" stopColor="rgba(0,194,255,0.0)" />
            </linearGradient>
            <linearGradient id="techLineB" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,194,255,0.0)" />
              <stop offset="45%" stopColor="rgba(0,194,255,0.8)" />
              <stop offset="100%" stopColor="rgba(127,227,255,0.0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,180 L200,180 L240,140 L440,140 L480,180 L700,180"
            stroke="url(#techLineA)"
            strokeWidth="1"
          />
          <path
            d="M700,420 L500,420 L460,460 L280,460 L240,420 L60,420 L20,460 L0,460"
            stroke="url(#techLineB)"
            strokeWidth="1"
          />
          <path
            d="M0,680 L120,680 L160,720 L360,720 L400,680 L560,680 L600,720 L700,720"
            stroke="url(#techLineA)"
            strokeWidth="1"
          />
          {/* Node dots at the junctions */}
          {[
            [240, 140],
            [440, 140],
            [460, 460],
            [240, 420],
            [160, 720],
            [400, 680],
            [600, 720],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={1.6} fill="rgba(127,227,255,0.9)" />
          ))}
        </svg>
      </div>
    </>
  )
}


