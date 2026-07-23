import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { siteConfig } from '@/constants/siteConfig'
import { glassCardStyle } from '@/lib/theme'

type Item = { Icon: LucideIcon; label: string; value: string; href?: string }

const items: readonly Item[] = [
  {
    Icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneLink,
  },
  {
    Icon: MapPin,
    label: 'Office',
    value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.region} ${siteConfig.contact.address.postalCode}`,
  },
  {
    Icon: Clock,
    label: 'Availability',
    value: siteConfig.contact.hours,
  },
]

export function ContactInfo() {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] p-8 sm:p-10"
      style={glassCardStyle({
        borderGradient:
          'linear-gradient(135deg, rgba(120,170,255,0.26), rgba(120,170,255,0.05) 55%, rgba(248,151,35,0.10))',
        blur: 22,
      })}
    >
      <p className="text-brand-soft font-mono text-[11px] tracking-[0.28em] uppercase">
        Get in touch
      </p>
      <h2 className="text-ink mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Direct contact
      </h2>
      <p className="text-ink-muted mt-3 text-[15px] leading-relaxed">
        Prefer email or phone? Reach us directly — every message goes to a real technical consultant.
      </p>

      <dl className="mt-8 space-y-6">
        {items.map(({ Icon, label, value, href }) => (
          <div key={label} className="flex gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(120,170,255,0.20)',
              }}
            >
              <Icon className="text-brand-soft h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <dt className="text-ink-faint font-mono text-[10px] tracking-[0.24em] uppercase">
                {label}
              </dt>
              <dd className="text-ink mt-1.5 text-[15px] leading-relaxed break-words">
                {href ? (
                  <a href={href} className="hover:text-brand-soft transition">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
