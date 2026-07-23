import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/constants/siteConfig'
import { navigationLinks, routes } from '@/constants/routes'
import { servicesFullDetail } from '@/content/services'

const { contact } = siteConfig
const fullAddress = `${contact.address.street}, ${contact.address.city}, ${contact.address.region} ${contact.address.postalCode}`

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-hairline bg-surface/40 py-14 text-ink-muted backdrop-blur-sm">
      <Container className="space-y-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Image
              src="/logo-3.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="max-w-xs text-sm leading-6 text-ink-muted">{siteConfig.description}</p>
            <form
              className="mt-6 flex max-w-xs items-center gap-2"
              action={`mailto:${contact.email}?subject=Newsletter%20signup`}
              method="post"
              encType="text/plain"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="Your work email"
                className="text-ink placeholder:text-ink-faint focus-visible:ring-brand h-10 flex-1 rounded-full border border-hairline bg-white/[0.03] px-4 text-xs transition focus-visible:outline-none focus-visible:ring-2"
              />
              <button
                type="submit"
                className="focus-visible:ring-brand inline-flex h-10 items-center justify-center rounded-full bg-brand-gradient px-3 text-xs font-semibold text-[#12161F] transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              {servicesFullDetail.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-ink">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.services} className="text-brand-soft transition hover:text-ink">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="transition hover:text-ink">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneLink} className="transition hover:text-ink">
                  {contact.phone}
                </a>
              </li>
              <li className="leading-6">{fullAddress}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link href={link.to} className="transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline pt-6">
          <div className="text-ink-faint flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <span>
              &copy; {year} {siteConfig.legalName}. All rights reserved.
            </span>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <span className="font-mono text-xs tracking-[0.18em] uppercase">
              {contact.address.city}, {contact.address.region}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
