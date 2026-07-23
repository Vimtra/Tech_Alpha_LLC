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

export function localBusinessJsonLd() {
  const { contact } = siteConfig
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: contact.phone,
    email: contact.email,
    priceRange: '$$$',
    image: `${siteConfig.url}/logo-3.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: 33.2079, longitude: -96.6389 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: siteConfig.organization.areaServed,
  } as const
}

export function serviceCatalogJsonLd(items: Array<{ name: string; description: string; slug: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services#service`,
    provider: { '@id': `${siteConfig.url}#organization` },
    name: 'Enterprise IT Consulting',
    description: siteConfig.description,
    areaServed: siteConfig.organization.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise Services',
      itemListElement: items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
          url: `${siteConfig.url}/services#${item.slug}`,
        },
      })),
    },
  } as const
}

export function serviceJsonLd(input: {
  name: string
  description: string
  slug: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${input.url}#service`,
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { '@id': `${siteConfig.url}#organization` },
    areaServed: siteConfig.organization.areaServed,
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

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } as const
}

export function jobPostingJsonLd(job: {
  title: string
  slug: string
  description: string
  employmentType: string
  datePosted: string
  validThrough?: string
  baseSalary?: { currency: string; value: number; unit: 'YEAR' | 'HOUR' | 'MONTH' }
  educationRequirement?: string
  experienceRequirement?: string
}) {
  const { contact } = siteConfig
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: siteConfig.legalName,
      value: job.slug,
    },
    datePosted: job.datePosted,
    ...(job.validThrough ? { validThrough: job.validThrough } : {}),
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.legalName,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}/logo-3.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.address.street,
        addressLocality: contact.address.city,
        addressRegion: contact.address.region,
        postalCode: contact.address.postalCode,
        addressCountry: contact.address.country,
      },
    },
    applicantLocationRequirements: { '@type': 'Country', name: 'United States' },
    jobLocationType: 'TELECOMMUTE',
    ...(job.baseSalary
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: job.baseSalary.currency,
            value: {
              '@type': 'QuantitativeValue',
              value: job.baseSalary.value,
              unitText: job.baseSalary.unit,
            },
          },
        }
      : {}),
    ...(job.educationRequirement
      ? {
          educationRequirements: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: job.educationRequirement,
          },
        }
      : {}),
    ...(job.experienceRequirement
      ? {
          experienceRequirements: {
            '@type': 'OccupationalExperienceRequirements',
            monthsOfExperience: 6,
            description: job.experienceRequirement,
          },
        }
      : {}),
  } as const
}
