import { clients } from '@/content/clients'
import { Container } from '@/components/ui/Container'

export function ClientsMarquee() {
  const loop = [...clients, ...clients]

  return (
    <section
      aria-label="Enterprise clients"
      className="relative py-16 sm:py-20"
    >
      <Container size="wide" className="max-w-[1440px]">
        <p className="text-brand-soft text-center font-mono text-[11px] tracking-[0.32em] uppercase">
          Trusted by enterprise leaders
        </p>
      </Container>

      <div
        aria-hidden="true"
        className="relative mt-10 overflow-hidden py-6 sm:mt-14"
        style={{
          borderTop: '1px solid rgba(120,170,255,0.10)',
          borderBottom: '1px solid rgba(120,170,255,0.10)',
          background:
            'linear-gradient(90deg, rgba(9,16,35,0.35) 0%, rgba(9,16,35,0.15) 50%, rgba(9,16,35,0.35) 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40"
          style={{ background: 'linear-gradient(90deg, var(--color-canvas), transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40"
          style={{ background: 'linear-gradient(-90deg, var(--color-canvas), transparent)' }}
        />
        <div className="animate-marquee motion-reduce:animate-none flex w-max items-center gap-14 whitespace-nowrap will-change-transform">
          {loop.map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="text-ink flex shrink-0 items-center gap-14 font-semibold tracking-[0.06em] sm:text-lg"
            >
              {client.name}
              <span className="text-brand-soft/70" aria-hidden="true">
                ●
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

