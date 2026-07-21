const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* Base radial mesh — deeper navy toward the middle so it never reads as flat black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(79,140,255,0.10) 0%, transparent 65%),' +
            'radial-gradient(ellipse 80% 55% at 20% 40%, rgba(0,194,255,0.08) 0%, transparent 70%),' +
            'radial-gradient(ellipse 70% 50% at 85% 60%, rgba(248,151,35,0.07) 0%, transparent 70%),' +
            'radial-gradient(ellipse 90% 55% at 50% 100%, rgba(79,140,255,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Drifting amber + blue blobs, larger and warmer */}
      <div className="animate-aurora-drift absolute -top-[15%] -left-[10%] h-[60vw] w-[60vw] rounded-full bg-brand/25 blur-[120px]" />
      <div className="animate-aurora-drift-slow absolute -top-[10%] -right-[12%] h-[55vw] w-[55vw] rounded-full bg-aurora-blue/25 blur-[130px]" />
      <div className="animate-aurora-drift absolute top-[40%] left-1/3 h-[50vw] w-[50vw] rounded-full bg-aurora-cyan/15 blur-[140px]" />
      <div className="animate-aurora-drift-slow absolute -bottom-[10%] left-[10%] h-[50vw] w-[50vw] rounded-full bg-aurora-blue/20 blur-[140px]" />
      <div className="animate-aurora-drift absolute -bottom-[15%] right-[5%] h-[45vw] w-[45vw] rounded-full bg-brand/15 blur-[130px]" />

      {/* Fine engineering grid */}
      <div className="bg-grid-overlay absolute inset-0" />

      {/* Noise */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.04]"
        style={{ backgroundImage: NOISE_SVG }}
      />

      {/* Top vignette to seat the navbar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,transparent_40%,rgba(5,8,22,0.5)_100%)]" />
    </div>
  )
}
