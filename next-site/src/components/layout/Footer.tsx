import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/constants/siteConfig'
import { navigationLinks } from '@/constants/routes'

const { contact } = siteConfig
const fullAddress = `${contact.address.street}, ${contact.address.city}, ${contact.address.region} ${contact.address.postalCode}`

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-hairline bg-surface/40 py-14 text-ink-muted backdrop-blur-sm">
      <Container className="space-y-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/logo-3.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="max-w-xs text-sm leading-6 text-ink-muted">
              DevOps, cloud, and ERP consulting with enterprise-grade delivery — from McKinney, TX to global
              organizations.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition hover:text-ink"
                >
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
            <p className="font-mono text-xs tracking-[0.2em] text-brand-soft uppercase">Quick links</p>
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

        <div className="text-ink-faint flex flex-col gap-2 border-t border-hairline pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} {siteConfig.legalName}. All rights reserved.</span>
          <span className="font-mono text-xs tracking-[0.18em] uppercase">
            {contact.address.city}, {contact.address.region} · Enterprise IT
          </span>
        </div>
      </Container>
    </footer>
  )
}
