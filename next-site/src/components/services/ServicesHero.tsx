import { Container } from '@/components/ui/Container'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { servicesFullDetail, servicesPage } from '@/content/services'
import { AMBER_GRADIENT } from '@/lib/theme'

export function ServicesHero() {
  const { eyebrow, headline, description } = servicesPage

  return (
    <section
      aria-label="Enterprise services — introduction"
      className="relative pt-[160px] pb-16"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <p className="text-ink-faint font-mono text-[11px] tracking-[0.24em] uppercase">
            {servicesFullDetail.length} capabilities · One partner
          </p>
        </div>

        <h1
          className="text-ink mt-8 font-bold tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.5rem, 4.4vw + 1rem, 5.75rem)', lineHeight: 1.04 }}
        >
          {headline.lead}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: AMBER_GRADIENT,
            }}
          >
            {headline.accent}
          </span>
          {headline.tail}
        </h1>

        <p className="text-ink-muted mt-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
          {description}
        </p>

        {/* Quick anchor row */}
        <nav
          aria-label="Services quick links"
          className="mt-12 flex flex-wrap gap-2 sm:mt-16"
        >
          {servicesFullDetail.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-ink-muted hover:text-ink hover:border-brand/30 focus-visible:ring-brand focus-visible:ring-offset-canvas group inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.04] px-4 py-2 text-[13px] font-medium transition duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="text-brand-soft/70 font-mono text-[10px] tracking-[0.16em]"
              >
                {s.number}
              </span>
              {s.title}
            </a>
          ))}
        </nav>
      </Container>
    </section>
  )
}
