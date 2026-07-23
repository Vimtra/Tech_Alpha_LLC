import { Container } from '@/components/ui/Container'
import { GradientHeading } from '@/components/home/GradientHeading'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'

type Section = { heading: string; body: readonly string[] }

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: readonly Section[]
}) {
  const [lead, ...rest] = title.split(' ')

  return (
    <section aria-label={title} className="relative pt-[160px] pb-24 sm:pb-32">
      <Container className="max-w-3xl">
        <SectionEyebrow>Legal</SectionEyebrow>
        <GradientHeading
          as="h1"
          lead={lead ?? title}
          accent={rest.join(' ') || title}
          className="mt-6"
        />
        <p className="text-ink-faint mt-4 font-mono text-xs tracking-[0.24em] uppercase">
          Last updated · {updated}
        </p>
        <p className="text-ink-muted mt-10 text-[17px] leading-[1.75]">{intro}</p>

        <div className="mt-14 space-y-12">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-ink text-xl font-semibold tracking-tight sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-ink-muted text-[16px] leading-[1.75]">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  )
}
