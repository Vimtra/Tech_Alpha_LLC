import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionEyebrow } from '@/components/home/SectionEyebrow'
import { AMBER_GRADIENT } from '@/lib/theme'

export function ClientsHero() {
  return (
    <section aria-label="Clients introduction" className="relative pt-[160px] pb-16">
      <Container size="wide" className="max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div>
            <SectionEyebrow>Clients - Enterprise Engagements</SectionEyebrow>
            <h1
              className="text-ink mt-8 font-bold tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 4.4vw + 1rem, 5.75rem)', lineHeight: 1.04 }}
            >
              Trusted by{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: AMBER_GRADIENT }}
              >
                enterprise leaders
              </span>{' '}
              across every discipline.
            </h1>
            <p className="text-ink-muted mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
              A verified portfolio of enterprises Tech Alpha has supported with cloud, DevOps, data, and
              application engagements across financial services, healthcare, aviation, retail, and more.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] lg:min-h-[520px]">
            <Image
              src="/clients-hero.jpg"
              alt="Enterprise technology consulting workspace"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-canvas/40 via-transparent to-brand/15" />
          </div>
        </div>
      </Container>
    </section>
  )
}