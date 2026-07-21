import type { Metadata } from 'next'
import { siteConfig } from '@/constants/siteConfig'

type BuildMetadataInput = {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  noIndex = false,
  keywords,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`
  const desc = description ?? siteConfig.description
  const url = new URL(path, siteConfig.url).toString()
  const ogImage = image ?? siteConfig.ogImage

  return {
    title: fullTitle,
    description: desc,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}
