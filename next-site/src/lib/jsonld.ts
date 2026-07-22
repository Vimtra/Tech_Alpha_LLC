import { siteConfig } from '@/constants/siteConfig'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-3.png`,
    description: siteConfig.description,
    foundingLocation: siteConfig.organization.foundingLocation,
    areaServed: siteConfig.organization.areaServed,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        areaServed: siteConfig.organization.areaServed,
        availableLanguage: ['English'],
      },
    ],
  } as const
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}#organization` },
    inLanguage: 'en-US',
  } as const
}

type Service = { name: string; description: string; slug: string }

export function serviceCatalogJsonLd(services: readonly Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}#services`,
    provider: { '@id': `${siteConfig.url}#organization` },
    serviceType: 'Enterprise IT Consulting',
    areaServed: siteConfig.organization.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${siteConfig.name} — Enterprise Services`,
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          url: `${siteConfig.url}/services#${s.slug}`,
          provider: { '@id': `${siteConfig.url}#organization` },
        },
      })),
    },
  } as const
}

export function itemListJsonLd(items: Array<{ name: string; url: string; description?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  } as const
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  } as const
}
