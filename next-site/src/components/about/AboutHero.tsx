import { Container } from '@/components/ui/Container'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { aboutHero } from '@/content/about'

export function AboutHero() {
  const { eyebrow, headline, description, callout } = aboutHero

  return (
    <section
      aria-label="About Tech Alpha — introduction"
      className="relative pt-[180px] pb-[100px]"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-20">
          {/* Editorial headline column */}
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h1
              className="text-ink mt-8 font-bold tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.75rem, 4.8vw + 1rem, 6.5rem)', lineHeight: 1.02 }}
            >
              {headline.lead}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)',
                }}
              >
                {headline.accent}
              </span>
              {headline.tail}
            </h1>
            <p className="text-ink-muted mt-10 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {description}
            </p>
          </div>

          {/* Callout card — pull quote + credentials */}
          <aside
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
            style={{
              background:
                'linear-gradient(rgba(9,16,35,0.45), rgba(9,16,35,0.45)) padding-box, ' +
                'linear-gradient(135deg, rgba(120,170,255,0.35) 0%, rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.14) 100%) border-box',
              border: '1px solid transparent',
              backdropFilter: 'blur(22px) saturate(140%)',
              WebkitBackdropFilter: 'blur(22px) saturate(140%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.32)',
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1/3 -right-1/3 h-[80%] w-[80%] rounded-full"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(79,140,255,0.20) 0%, transparent 70%)',
                filter: 'blur(45px)',
              }}
            />

            {/* Opening glyph */}
            <div
              aria-hidden="true"
              className="text-brand-soft/30 relative -mt-2 font-serif text-7xl leading-none select-none"
            >
              &ldquo;
            </div>

            <blockquote
              className="text-ink relative -mt-4 font-semibold tracking-tight"
              style={{ fontSize: 'clamp(1.15rem, 0.8vw + 0.85rem, 1.35rem)', lineHeight: 1.5 }}
            >
              {callout.quote}
            </blockquote>

            <div
              aria-hidden="true"
              className="my-8 h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(120,170,255,0.30), transparent)',
              }}
            />

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
              {callout.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.22em] uppercase">
                    {f.label}
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13.5px] font-semibold leading-tight">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  )
}
