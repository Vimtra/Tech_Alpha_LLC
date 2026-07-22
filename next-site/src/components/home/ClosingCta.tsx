import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { closingCta } from '@/content/home'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'

export function ClosingCta() {
  const { eyebrow, headline, description, ctas } = closingCta

  return (
    <section id="cta" aria-label="Get in touch" className="relative py-24 sm:py-32">
      <Container size="wide" className="max-w-[1440px]">
        <div
          className="relative overflow-hidden rounded-[36px] px-8 py-16 text-center sm:px-14 sm:py-20 lg:px-20"
          style={{
            background:
              'linear-gradient(rgba(9,16,35,0.55), rgba(9,16,35,0.55)) padding-box, ' +
              'linear-gradient(135deg, rgba(120,170,255,0.35) 0%, rgba(120,170,255,0.08) 45%, rgba(248,151,35,0.22) 100%) border-box',
            border: '1px solid transparent',
            backdropFilter: 'blur(24px) saturate(140%)',
            WebkitBackdropFilter: 'blur(24px) saturate(140%)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-1/2 left-1/2 h-full w-[70%] -translate-x-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(79,140,255,0.18) 0%, transparent 65%)',
              filter: 'blur(50px)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1/3 right-0 h-[80%] w-[50%] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(248,151,35,0.14) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <GradientHeading
              as="h2"
              lead={headline.lead}
              accent={headline.accent}
              tail={headline.tail}
              className="mt-6"
            />
            <p className="text-ink-muted mx-auto mt-6 max-w-xl text-lg leading-relaxed">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={ctas.primary.href}
                className="group focus-visible:ring-brand focus-visible:ring-offset-canvas inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161F] transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                style={{
                  boxShadow:
                    '0 12px 30px rgba(248,151,35,0.28), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                <span>{ctas.primary.label}</span>
                <ArrowRight
                  className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </Link>

              <a
                href={ctas.secondary.href}
                className="group focus-visible:ring-brand focus-visible:ring-offset-canvas inline-flex h-12 items-center justify-center gap-2 rounded-pill border border-hairline bg-white/[0.05] px-6 text-sm font-semibold text-ink backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/40 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                <span>{ctas.secondary.label}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
