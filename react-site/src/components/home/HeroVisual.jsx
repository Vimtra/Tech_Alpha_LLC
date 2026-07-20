import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Premium Enterprise Hero Visual — Tech Alpha LLC
 *
 * An immersive 3D digital globe with:
 *  - Deep-shaded sphere with wireframe mesh, parallels & meridians
 *  - Animated equatorial orbital ring with SMIL-animated orbiting dots
 *  - 7 service capability nodes arranged around the globe with glassmorphism
 *  - Animated glowing connection lines from globe to each node
 *  - Multi-layer aurora glows, floating particles, platform pedestal
 *  - Subtle mouse-parallax effect
 *  - HUD corner accents
 *
 * Pure SVG + CSS transforms. No images. No external libraries.
 */

// ── Layout constants ──────────────────────────────────────────────────────────
const W = 720
const H = 700
const CX = 355
const CY = 345
const R = 155       // globe radius
const NODE_R = 265  // node ring radius

const toRad = (deg) => (deg * Math.PI) / 180

// ── Service nodes — evenly distributed to avoid overlaps ─────────────────────
const SERVICE_DEFS = [
  { id: 'aws',       label: ['AWS CLOUD'],            accent: '#F89723', angle: -110 },
  { id: 'ai',        label: ['AI & MACHINE', 'LEARNING'], accent: '#00C2FF', angle:  -52 },
  { id: 'devops',    label: ['DEVOPS'],               accent: '#4F8CFF', angle:   22  },
  { id: 'security',  label: ['CYBER', 'SECURITY'],    accent: '#4F8CFF', angle:   80  },
  { id: 'data',      label: ['DATA', 'ENGINEERING'],  accent: '#00C2FF', angle:  138  },
  { id: 'analytics', label: ['ANALYTICS'],            accent: '#F89723', angle:  198  },
  { id: 'auto',      label: ['AUTOMATION'],           accent: '#00C2FF', angle:  256  },
]

const NODES = SERVICE_DEFS.map((n) => {
  const a = toRad(n.angle)
  return {
    ...n,
    x: CX + NODE_R * Math.cos(a),
    y: CY + NODE_R * Math.sin(a),
    sx: CX + R * 0.80 * Math.cos(a),
    sy: CY + R * 0.80 * Math.sin(a),
  }
})

// ── Globe wireframe ───────────────────────────────────────────────────────────
const PARALLELS = [-0.65, -0.38, 0, 0.38, 0.65].map((k) => {
  const dy = k * R
  const rx = Math.sqrt(R * R - dy * dy)
  return { cy: CY + dy, rx, ry: rx * 0.30 }
})
const MERIDIAN_RX = [150, 112, 74, 38, 10]

// ── Surface "city" dots (removed)
// Replaced by subtle illuminated continent shading handled by gradients/ellipses

// ── Floating particles ────────────────────────────────────────────────────────
const PARTS = Array.from({ length: 20 }, (_, i) => ({
  x: ((Math.sin(i * 1.618 + 1) * 0.5 + 0.5) * 90 + 5).toFixed(1),
  y: ((Math.cos(i * 2.094 + 0.5) * 0.5 + 0.5) * 88 + 6).toFixed(1),
  s: (1.4 + (i % 3) * 0.7).toFixed(1),
  d: (6 + (i % 5) * 1.7).toFixed(1),
  delay: ((i * 0.42) % 3.4).toFixed(2),
  color: ['#F89723', '#00C2FF', '#4F8CFF', '#ffffff'][i % 4],
  opacity: (0.30 + (i % 4) * 0.12).toFixed(2),
}))

// ── Equatorial ring paths ─────────────────────────────────────────────────────
const EQ1_RX = R + 40, EQ1_RY = (R + 40) * 0.27
const EQ2_RX = R + 22, EQ2_RY = (R + 22) * 0.20
const eqPath = (rx, ry) =>
  `M ${CX - rx} ${CY} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`
const EQ1_PATH = eqPath(EQ1_RX, EQ1_RY)
const EQ2_PATH = eqPath(EQ2_RX, EQ2_RY)

// ── Node icon components ──────────────────────────────────────────────────────
function NodeIcon({ id, accent }) {
  const common = { size: 18, strokeWidth: 1.6, color: '#DCE6F5' }
  switch (id) {
    case 'aws':
      return (
        <g>
          <g transform="translate(-9 -9)">
            <Cloud {...common} />
          </g>
        </g>
      )
    case 'ai':
      return (
        <g>
          <g transform="translate(-9 -9)">
            return (
              <div
                ref={ref}
                className="relative mx-auto w-full max-w-[680px] select-none"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
              >
                {/* Simple placeholder globe (HTML/CSS) — preserves layout without SVGs */}
                <div className="pointer-events-none relative w-full aspect-[720/700]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0A1224] to-[#081028] shadow-[0_0_60px_rgba(0,194,255,0.08)]" style={{ width: 310, height: 310 }} />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" style={{ width: 380, height: 380 }} />
                  {/* Orbit rings (CSS) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 520, height: 200, border: '1px solid rgba(79,140,255,0.12)', transform: 'rotate(-20deg)' }} />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: 420, height: 160, border: '1px solid rgba(0,194,255,0.09)', transform: 'rotate(12deg)' }} />
                  {/* Nodes placeholders */}
                  <div className="absolute" style={{ left: '78%', top: '20%' }}>
                    <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10" />
                  </div>
                  <div className="absolute" style={{ left: '86%', top: '46%' }}>
                    <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10" />
                  </div>
                  <div className="absolute" style={{ left: '62%', top: '78%' }}>
                    <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            )
        {/* ── Brand hub (globe center) ───────────────────────── */}
        <circle cx={CX} cy={CY} r={54} fill="url(#hv-hub)" opacity="0.14"
          style={{ animation: anim('hv-pulse', '4s', 'ease-in-out infinite') }} />
        <circle cx={CX} cy={CY} r={36} fill="url(#hv-hub)" opacity="0.20" />
        <circle cx={CX} cy={CY} r={28} fill="url(#hv-hub)" />
        <circle cx={CX} cy={CY} r={28} fill="none"
          stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" />
        {/* Hexagon icon */}
        <g stroke="#0C1226" strokeWidth="2.1" fill="none" strokeLinejoin="round" opacity="0.88">
          <polygon points={`${CX},${CY-13} ${CX+11},${CY-6} ${CX+11},${CY+7} ${CX},${CY+14} ${CX-11},${CY+7} ${CX-11},${CY-6}`} />
        </g>

        {/* ── Capability nodes ──────────────────────────────── */}
        {NODES.map((n, i) => (
          <g key={`node-${n.id}`}>
            {/* Pulse aura */}
            <circle cx={n.x} cy={n.y} r={40} fill={n.accent} opacity="0.11"
              style={{
                animation: anim('hv-city', '3.9s', `ease-in-out infinite ${(i * 0.37).toFixed(2)}s`),
                transformBox: 'fill-box', transformOrigin: 'center',
              }}
            />
            {/* Glass disk */}
            <circle cx={n.x} cy={n.y} r={34}
              fill="url(#hv-node-bg)"
              stroke={n.accent} strokeWidth="1.2" strokeOpacity="0.62" />
            {/* Inner glass sheen */}
            <ellipse cx={n.x - 8} cy={n.y - 10} rx={14} ry={9} fill="rgba(255,255,255,0.06)" />
            {/* Icon (centered) with consistent visual weight */}
            <g transform={`translate(${n.x},${n.y})`} style={{ transformBox: 'fill-box', transformOrigin: 'center' }} className="node-group">
              <NodeIcon id={n.id} accent={n.accent} />
            </g>
            {/* Label */}
            {n.label.map((line, li) => (
              <text key={li}
                x={n.x} y={n.y + 46 + li * 12}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="9.5" letterSpacing="1.4"
                fontFamily="ui-monospace,monospace"
                fill="rgba(148,163,184,0.90)">
                {line}
              </text>
            ))}
          </g>
        ))}

        {/* ── HUD corner brackets ───────────────────────────── */}
        {[
          [52, 52, 72, 52, 52, 72],
          [W - 52, 52, W - 72, 52, W - 52, 72],
          [52, H - 52, 72, H - 52, 52, H - 72],
          [W - 52, H - 52, W - 72, H - 52, W - 52, H - 72],
        ].map(([ax, ay, bx, by, cx2, cy2], i) => (
          <g key={i} opacity="0.28">
            <line x1={ax} y1={ay} x2={bx} y2={by}
              stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1={ax} y1={ay} x2={cx2} y2={cy2}
              stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ))}
      </svg>

      {/* ── Keyframe definitions ──────────────────────────────── */}
      <style>{`
        @keyframes hv-pulse     { 0%,100%{opacity:.38}  50%{opacity:.72} }
        @keyframes hv-float     { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-12px)} }
        @keyframes hv-float-svg { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-9px)}  }
        @keyframes hv-sweep     { from{transform:translateX(-270px)} to{transform:translateX(780px)} }
        @keyframes hv-dash      { from{stroke-dashoffset:0} to{stroke-dashoffset:-32} }
        @keyframes hv-flow      { from{stroke-dashoffset:0} to{stroke-dashoffset:-144} }
        @keyframes hv-rotate    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes hv-city      { 0%,100%{opacity:.42;transform:scale(.82)} 50%{opacity:1;transform:scale(1)} }
        .node-group { transition: transform 250ms cubic-bezier(.2,.9,.2,1); }
        .node-group:hover { transform: scale(1.06); }
        @media(prefers-reduced-motion:reduce){
          *{animation:none!important;transition:none!important}
        }
      `}</style>
    </div>
  )
}
