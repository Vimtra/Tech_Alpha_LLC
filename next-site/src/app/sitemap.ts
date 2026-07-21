import type { MetadataRoute } from 'next'
import { siteConfig } from '@/constants/siteConfig'
import { routes } from '@/constants/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = Object.values(routes).map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
  return entries
}
