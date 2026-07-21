import { Container } from '@/components/ui/Container'
import { servicesPreview, servicesPreviewSection } from '@/content/services'
import { ServiceCard } from './ServiceCard'

export function ServicesPreview() {
  const { eyebrow, headline, description } = servicesPreviewSection

  return (
    <section
      id="services"
      aria-label="Core enterprise services"
      className="relative py-[140px]"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="text-brand-soft font-mono text-xs tracking-[0.28em] uppercase">
            {eyebrow}
          </p>
          <h2 className="text-ink mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem]">
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
          </h2>
          <p className="text-ink-muted mt-6 max-w-2xl text-lg leading-relaxed">{description}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {servicesPreview.map((service, i) => (
            <ServiceCard key={service.slug} index={i} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
