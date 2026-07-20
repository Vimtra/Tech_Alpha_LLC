/**
 * Fixed, non-interactive background stack for the whole app:
 * canvas → amber + blue/cyan aurora glow (drifting) → fine grid → subtle noise.
 * Kept low-contrast so foreground text stays AA-legible.
 */
function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      {/* Amber glow — brand leads, anchored top-left */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-brand/20 blur-[120px] animate-aurora-drift" />
      {/* Blue aurora — secondary, top-right */}
      <div className="absolute -right-[12%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-aurora-blue/20 blur-[130px] animate-aurora-drift-slow" />
      {/* Cyan wash — lower center, quiet */}
      <div className="absolute left-1/3 top-1/2 h-[45vw] w-[45vw] rounded-full bg-aurora-cyan/10 blur-[140px] animate-aurora-drift" />

      {/* Fine engineering grid */}
      <div className="absolute inset-0 bg-grid-overlay" />

      {/* Subtle noise texture (inline SVG, no network) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Vignette to seat content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,transparent_40%,rgba(5,8,22,0.6)_100%)]" />
    </div>
  )
}

export default AuroraBackground
