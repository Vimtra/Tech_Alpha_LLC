import { useRef } from 'react'
import { motion } from 'framer-motion'
import useMouseParallax from '../../../hooks/useMouseParallax'
import { DOTS, HUB, NODES, PEDESTAL, R, VIEW } from './globe.data'
import NodeIcon from './NodeIcon'

const ACCENT = '#00C2FF'   // primary cool cyan
const AMBER = '#F89723'    // brand pin & connection thread

/**
 * The hero's single focal visual, rendered as one large SVG:
 *   1. connection arcs (behind globe)
 *   2. atmosphere halo + sphere body
 *   3. dot-matrix continents + longitude hint lines + specular
 *   4. equator arc + light sweep band
 *   5. amber pins at the arc/sphere intersections
 *   6. pedestal rings (behind analytics)
 *   7. capability node chips + labels
 *
 * Pointer parallax is scoped to the parent section so the whole scene drifts
 * subtly with the cursor. All infinite motion is CSS keyframes so
 * prefers-reduced-motion pauses it automatically.
 */
function HeroGlobe({ sectionRef }) {
  const wrapRef = useRef(null)
  const { x, y } = useMouseParallax(sectionRef, 10)

  return (
    <motion.div
      ref={wrapRef}
      className="pointer-events-none relative aspect-square w-full"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 0.65, 0.35, 1], delay: 0.15 }}
    >
      {/* Soft glow bed under the globe — layered bloom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[40%] h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,194,255,0.45) 0%, rgba(79,140,255,0.24) 32%, rgba(0,194,255,0.08) 55%, transparent 74%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute left-1/2 top-[40%] h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow [animation-delay:1.5s]"
          style={{ background: 'rgba(0,194,255,0.35)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute right-[8%] top-[10%] h-[38%] w-[38%] rounded-full animate-pulse-glow [animation-delay:2s]"
          style={{ background: 'rgba(79,140,255,0.25)', filter: 'blur(80px)' }}
        />
      </div>

      <svg
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className="relative w-full"
        role="img"
        aria-label="Enterprise cloud globe linking AWS, AI, DevOps, cyber security, data engineering, analytics and automation"
      >
        <defs>
          {/* Sphere body — cool navy shading */}
          <radialGradient id="hg-sphere" cx="38%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#14203E" />
            <stop offset="55%" stopColor="#0A1024" />
            <stop offset="100%" stopColor="#04081A" />
          </radialGradient>
          {/* Atmosphere fringe */}
          <radialGradient id="hg-atmos" cx="50%" cy="50%" r="52%">
            <stop offset="86%" stopColor={ACCENT} stopOpacity="0" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.55" />
          </radialGradient>
          {/* Connection thread */}
          <linearGradient id="hg-thread" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={AMBER} />
            <stop offset="100%" stopColor={ACCENT} />
          </linearGradient>
          {/* Pedestal spectrum */}
          <linearGradient id="hg-ped" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor={ACCENT} stopOpacity="0" />
            <stop offset="20%" stopColor={ACCENT} stopOpacity="0.55" />
            <stop offset="50%" stopColor={AMBER}  stopOpacity="0.7" />
            <stop offset="80%" stopColor={ACCENT} stopOpacity="0.55" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
          {/* Vertical projection glow */}
          <linearGradient id="hg-projection" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0" />
            <stop offset="50%" stopColor={ACCENT} stopOpacity="0.18" />
            <stop offset="100%" stopColor={AMBER} stopOpacity="0.2" />
          </linearGradient>
          <clipPath id="hg-clip">
            <circle cx={HUB.x} cy={HUB.y} r={R} />
          </clipPath>
        </defs>

        {/* 0 — Outer orbit rings (behind everything), slowly rotating with a bright trail */}
        {[
          { r: R + 42, tilt: -18, dur: 42, delay: 0 },
          { r: R + 78, tilt: 22, dur: 62, delay: -12 },
        ].map((orb, oi) => {
          const rx = orb.r
          const ry = orb.r * 0.36
          const pathId = `orb-${oi}`
          const path = `M ${HUB.x - rx} ${HUB.y} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`
          return (
            <g key={`orb-${oi}`} style={{ transform: `rotate(${orb.tilt}deg)`, transformOrigin: `${HUB.x}px ${HUB.y}px` }}>
              <path id={pathId} d={path} fill="none" stroke={ACCENT} strokeOpacity="0.14" strokeWidth="1" />
              {[0, 0.5].map((t) => (
                <circle key={t} r="3" fill="#FFD79A" opacity="0.9">
                  <animateMotion dur={`${orb.dur}s`} begin={`${orb.delay - t * orb.dur}s`} repeatCount="indefinite">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
              ))}
            </g>
          )
        })}

        {/* 1 — Connection arcs (behind globe body) — thicker + brighter */}
        {NODES.map((n, i) => {
          const dx = n.x - HUB.x
          const dy = n.y - HUB.y
          const len = Math.hypot(dx, dy)
          const sx = HUB.x + (dx / len) * (R + 4)
          const sy = HUB.y + (dy / len) * (R + 4)
          return (
            <g key={`c-${n.id}`}>
              {/* Base beam */}
              <line x1={sx} y1={sy} x2={n.x} y2={n.y} stroke="url(#hg-thread)" strokeWidth="1.4" strokeOpacity="0.85" strokeLinecap="round" />
              {/* Flowing dashed overlay */}
              <line
                x1={sx}
                y1={sy}
                x2={n.x}
                y2={n.y}
                stroke="url(#hg-thread)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="1 9"
                className="animate-flow"
                style={{ animationDelay: `${i * -0.32}s` }}
              />
            </g>
          )
        })}

        {/* 2 — Atmosphere halo (multi-layer) + sphere body */}
        <circle cx={HUB.x} cy={HUB.y} r={R + 34} fill="url(#hg-atmos)" opacity="0.55" />
        <circle cx={HUB.x} cy={HUB.y} r={R + 22} fill="url(#hg-atmos)" />
        <circle cx={HUB.x} cy={HUB.y} r={R + 4} fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.4" />
        <circle cx={HUB.x} cy={HUB.y} r={R + 2} fill="none" stroke={ACCENT} strokeWidth="1.8" opacity="0.75" />
        <circle cx={HUB.x} cy={HUB.y} r={R} fill="url(#hg-sphere)" />
        {/* Rim light — top-right specular arc */}
        <path
          d={`M ${HUB.x + R * Math.cos((-140 * Math.PI) / 180)} ${HUB.y + R * Math.sin((-140 * Math.PI) / 180)} A ${R} ${R} 0 0 1 ${HUB.x + R * Math.cos((-20 * Math.PI) / 180)} ${HUB.y + R * Math.sin((-20 * Math.PI) / 180)}`}
          fill="none"
          stroke="#C7F1FF"
          strokeWidth="1.4"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />

        {/* 3 — Continents + longitude/latitude hints, clipped to sphere */}
        <g clipPath="url(#hg-clip)">
          {/* Subtle continent shapes (lightweight SVG paths) */}
          <g opacity="0.14" filter="url(#hg-atmos)">
            <path d={`M ${HUB.x-70} ${HUB.y-10} q 28 -18 70 -12 q -8 14 -26 22 q -36 10 -44 4 z`} fill="#0f3a60" />
            <path d={`M ${HUB.x+18} ${HUB.y+10} q 32 -8 64 8 q -10 12 -28 18 q -34 -6 -36 -34 z`} fill="#0b2c4a" />
            <path d={`M ${HUB.x-20} ${HUB.y+24} q 20 -10 42 -6 q -8 10 -24 20 q -28 -6 -18 -14 z`} fill="#0f3653" />
          </g>
          {/* Thin latitude/longitude lines for premium wireframe */}
          {[140, 100, 60].map((rx, i) => (
            <ellipse key={`mer-${i}`} cx={HUB.x} cy={HUB.y} rx={rx} ry={R} fill="none" stroke="rgba(100,160,255,0.10)" strokeWidth="0.9" />
          ))}
          <line x1={HUB.x} y1={HUB.y - R} x2={HUB.x} y2={HUB.y + R} stroke="rgba(100,160,255,0.10)" strokeWidth="0.9" />
          {/* Glassy speculars and soft back-scatter */}
          <ellipse cx={HUB.x - 46} cy={HUB.y - 60} rx="60" ry="38" fill="#ffffff" opacity="0.10" />
          <ellipse cx={HUB.x - 66} cy={HUB.y - 82} rx="22" ry="14" fill="#ffffff" opacity="0.14" />
          <ellipse cx={HUB.x + 60} cy={HUB.y + 66} rx="70" ry="46" fill={ACCENT} opacity="0.10" />
          {/* Sweeping light band (subtle) */}
          <g className="animate-globe-sweep">
            <rect x={HUB.x - 40} y={HUB.y - R} width="80" height={R * 2} fill="#ffffff" opacity="0.05" />
          </g>
        </g>

        {/* 4 — Bright front-facing equator arc */}
        <path
          d={`M ${HUB.x - R + 10} ${HUB.y} q ${R - 10} 42 ${(R - 10) * 2} 0`}
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.55"
          strokeWidth="2"
        />

        {/* 5 — Amber pins at arc/sphere intersections — pulsing */}
        {NODES.map((n, i) => {
          const dx = n.x - HUB.x
          const dy = n.y - HUB.y
          const len = Math.hypot(dx, dy)
          const px = HUB.x + (dx / len) * R
          const py = HUB.y + (dy / len) * R
          return (
            <g key={`pin-${i}`}>
              <circle
                cx={px}
                cy={py}
                r="12"
                fill={AMBER}
                opacity="0.28"
                className="animate-node-pulse"
                style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.4}s` }}
              />
              <circle cx={px} cy={py} r="6" fill={AMBER} opacity="0.55" />
              <circle cx={px} cy={py} r="3.4" fill="#FFE8C4" />
            </g>
          )
        })}

        {/* 6 — Pedestal (behind analytics chip) */}
        <g>
          {/* Upward projection glow to the globe */}
          <rect x={PEDESTAL.cx - 80} y={HUB.y + R - 30} width="160" height={PEDESTAL.cy - HUB.y - R + 40} fill="url(#hg-projection)" opacity="0.35" />
          <ellipse cx={PEDESTAL.cx} cy={PEDESTAL.cy} rx={PEDESTAL.rx} ry={PEDESTAL.ry} fill="none" stroke="url(#hg-ped)" strokeWidth="1.4" />
          <ellipse cx={PEDESTAL.cx} cy={PEDESTAL.cy + 22} rx={PEDESTAL.rx - 46} ry={PEDESTAL.ry - 6} fill="none" stroke="url(#hg-ped)" strokeWidth="1.2" opacity="0.85" />
          <ellipse cx={PEDESTAL.cx} cy={PEDESTAL.cy + 44} rx={PEDESTAL.rx - 92} ry={PEDESTAL.ry - 12} fill="none" stroke="url(#hg-ped)" strokeWidth="1.1" opacity="0.7" />
          <ellipse cx={PEDESTAL.cx} cy={PEDESTAL.cy + 62} rx={PEDESTAL.rx - 140} ry={PEDESTAL.ry - 18} fill="none" stroke="url(#hg-ped)" strokeWidth="1" opacity="0.55" />
          {/* Amber tick marks on the outer ring */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * (Math.PI * 2)) / 16
            const rx1 = PEDESTAL.rx * Math.cos(a)
            const ry1 = PEDESTAL.ry * Math.sin(a)
            const rx2 = (PEDESTAL.rx - 10) * Math.cos(a)
            const ry2 = (PEDESTAL.ry - 4) * Math.sin(a)
            return (
              <line
                key={i}
                x1={PEDESTAL.cx + rx1}
                y1={PEDESTAL.cy + ry1}
                x2={PEDESTAL.cx + rx2}
                y2={PEDESTAL.cy + ry2}
                stroke={i % 4 === 0 ? AMBER : ACCENT}
                strokeOpacity="0.55"
                strokeWidth="1.2"
              />
            )
          })}
        </g>

        {/* 7 — Node chips — layered glow, brighter accent ring */}
        {NODES.map((n, i) => {
          const labelY = n.labelAbove ? n.y - 58 : n.y + 68
          return (
            <g key={`n-${n.id}`} className="group">
              {/* Outer halo bloom */}
              <circle
                cx={n.x}
                cy={n.y}
                r="52"
                fill={n.accent}
                opacity="0.12"
                className="animate-pulse-glow"
                style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.5}s` }}
              />
              {/* Mid halo pulse */}
              <circle
                cx={n.x}
                cy={n.y}
                r="40"
                fill={n.accent}
                opacity="0.22"
                className="animate-node-pulse"
                style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${i * 0.4}s` }}
              />
              {/* Glass disc */}
              <circle cx={n.x} cy={n.y} r="32" fill="#0A1226" />
              <circle cx={n.x} cy={n.y} r="32" fill={n.accent} fillOpacity="0.06" />
              {/* Bright accent ring */}
              <circle cx={n.x} cy={n.y} r="32" fill="none" stroke={n.accent} strokeOpacity="0.95" strokeWidth="2" />
              {/* Inner hairline */}
              <circle cx={n.x} cy={n.y} r="28.5" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              {/* Icon */}
              <g transform={`translate(${n.x}, ${n.y})`}>
                <NodeIcon name={n.icon} />
              </g>
              {/* Multi-line label */}
              <text
                x={n.x}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11.5"
                letterSpacing="2.2"
                fontFamily="ui-monospace, monospace"
                fill="rgba(230,240,255,0.95)"
              >
                {n.label.map((line, li) => (
                  <tspan key={li} x={n.x} dy={li === 0 ? 0 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          )
        })}
      </svg>
    </motion.div>
  )
}

export default HeroGlobe
