'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, CloudCog, Headphones, Wrench, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GradientHeading } from './GradientHeading'
import { SectionEyebrow } from './SectionEyebrow'
import { servicesPreview, servicesPreviewSection, type ServiceIconName } from '@/content/services'
import { cn } from '@/lib/cn'
import { glassCardStyle } from '@/lib/theme'

const ICONS: Record<ServiceIconName, LucideIcon> = {
  cloud: CloudCog,
  wrench: Wrench,
  support: Headphones,
}

const cardBorderGradient =
  'linear-gradient(135deg, rgba(120,170,255,0.28) 0%, rgba(120,170,255,0.06) 55%, rgba(248,151,35,0.12) 100%)'
const featuredCardGlass = glassCardStyle({ borderGradient: cardBorderGradient, blur: 22 })
const compactCardGlass = glassCardStyle({ borderGradient: cardBorderGradient, blur: 18 })

export function ServicesPreview() {
  const { eyebrow, headline, description } = servicesPreviewSection
  const [featured, ...rest] = servicesPreview

  return (
    <section
      id="services"
      aria-label="Core enterprise services"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <Container size="wide" className="max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <GradientHeading
              as="h2"
              lead={headline.lead}
              accent={headline.accent}
              tail={headline.tail}
              className="mt-6"
            />
          </div>
          <p className="text-ink-muted max-w-md text-[15px] leading-[1.65] lg:text-right">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-20 lg:grid-cols-3 lg:gap-6">
          {featured && (
            <FeaturedCard service={featured} />
          )}
          <div className="grid gap-5 lg:col-span-1">
            {rest.map((service, i) => (
              <CompactCard key={service.slug} service={service} index={i + 1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

type CardService = (typeof servicesPreview)[number]

function FeaturedCard({ service }: { service: CardService }) {
  const Icon = ICONS[service.iconName]
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative lg:col-span-2"
    >
      <Link
        href={service.href}
        aria-label={`${service.title} — learn more`}
        className={cn(
          'focus-visible:ring-brand focus-visible:ring-offset-canvas relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] p-10 transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-14',
          'group-hover:shadow-[0_30px_80px_rgba(79,140,255,0.18)]',
        )}
        style={{
          ...featuredCardGlass,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/3 -right-1/3 h-[70%] w-[70%] rounded-full transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at center, rgba(79,140,255,0.24) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
          }}
        />

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(120,170,255,0.20)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <Icon className="text-brand-soft h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
            </div>
            <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
              Featured · {service.tag}
            </p>
          </div>
          <h3 className="text-ink mt-8 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl">
            {service.title}
          </h3>
          <p className="text-ink-muted mt-6 text-[17px] leading-[1.7]">{service.description}</p>
        </div>

        <div className="relative z-10 mt-10 flex items-center gap-2 text-sm font-semibold text-brand">
          <span>Explore capability</span>
          <span className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/25 bg-brand/[0.08] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-brand/50 group-hover:bg-brand/[0.15]">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

function CompactCard({ service, index }: { service: CardService; index: number }) {
  const Icon = ICONS[service.iconName]
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Link
        href={service.href}
        aria-label={`${service.title} — learn more`}
        className="focus-visible:ring-brand focus-visible:ring-offset-canvas relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        style={{
          ...compactCardGlass,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(120,170,255,0.18)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <Icon className="text-brand-soft h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <p className="text-brand-soft font-mono text-[10px] tracking-[0.24em] uppercase">
            {service.tag}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-ink text-xl font-semibold tracking-tight">{service.title}</h3>
          <p className="text-ink-muted mt-3 text-[14px] leading-[1.6]">{service.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-brand">
          <span>Learn more</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>
      </Link>
    </motion.article>
  )
}
