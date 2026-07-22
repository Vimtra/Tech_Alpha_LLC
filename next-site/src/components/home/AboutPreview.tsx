import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { aboutPreview } from '@/content/home'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'

export function AboutPreview() {
  const { eyebrow, headline, paragraphs, bulletsTitle, bullets } = aboutPreview

  return (
    <section
      id="about-preview"
      aria-label="About Tech Alpha"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <GradientHeading
              as="h2"
              lead={headline.lead}
              accent={headline.accent}
              tail={` ${headline.tail}`}
              className="mt-6"
            />
            <div className="mt-8 space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted text-[17px] leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
            style={{
              background:
                'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
                'linear-gradient(135deg, rgba(120,170,255,0.28) 0%, rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.10) 100%) border-box',
              border: '1px solid transparent',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1/3 -right-1/3 h-[80%] w-[80%] rounded-full"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(79,140,255,0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              {bulletsTitle}
            </p>
            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(79,140,255,0.14)',
                      border: '1px solid rgba(120,170,255,0.22)',
                    }}
                    aria-hidden="true"
                  >
                    <Check className="text-brand-soft h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-ink text-[15px] leading-[1.6]">{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  )
}
