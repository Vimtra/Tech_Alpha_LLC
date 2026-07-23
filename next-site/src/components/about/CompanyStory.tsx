import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { companyStory } from '@/content/about'
import { glassCardStyle } from '@/lib/theme'

export function CompanyStory() {
  const { eyebrow, headline, leadParagraph, bodyParagraphs, pullQuote } = companyStory

  return (
    <section aria-label="Company story" className="relative py-24 sm:py-32 lg:py-40">
      <Container className="max-w-3xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <GradientHeading
          as="h2"
          lead={headline.lead}
          accent={headline.accent}
          tail={headline.tail}
          className="mt-6"
        />

        {/* Lead paragraph with drop cap */}
        <p className="text-ink mt-10 text-[19px] leading-[1.7]">
          <span
            className="mr-3 float-left bg-clip-text pt-1 font-bold text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)',
              fontSize: '4.5rem',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            {leadParagraph.charAt(0)}
          </span>
          {leadParagraph.slice(1)}
        </p>

        {/* First body paragraph */}
        <p className="text-ink-muted mt-8 text-[17px] leading-[1.75]">{bodyParagraphs[0]}</p>

        {/* Pull quote break */}
        <figure
          className="relative my-16 rounded-3xl px-8 py-10 sm:px-12 sm:py-12"
          style={glassCardStyle({
            borderGradient:
              'linear-gradient(135deg, rgba(120,170,255,0.30) 0%, rgba(248,151,35,0.14) 100%)',
            blur: 20,
          })}
        >
          <div
            aria-hidden="true"
            className="text-brand-soft/40 absolute -top-4 left-6 font-serif text-8xl leading-none select-none"
          >
            &ldquo;
          </div>
          <blockquote
            className="text-ink relative z-10 font-semibold tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 1.4vw + 0.8rem, 2rem)', lineHeight: 1.35 }}
          >
            {pullQuote.body}
          </blockquote>
          <figcaption className="text-brand-soft relative z-10 mt-6 font-mono text-[11px] tracking-[0.28em] uppercase">
            — {pullQuote.attribution}
          </figcaption>
        </figure>

        {/* Second body paragraph */}
        <p className="text-ink-muted text-[17px] leading-[1.75]">{bodyParagraphs[1]}</p>
      </Container>
    </section>
  )
}
