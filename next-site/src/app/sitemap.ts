import type { MetadataRoute } from 'next'
import { siteConfig } from '@/constants/siteConfig'
import { routes } from '@/constants/routes'
import { jobs } from '@/content/careers'
import { servicesFullDetail } from '@/content/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const core: MetadataRoute.Sitemap = Object.values(routes).map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const serviceDetail: MetadataRoute.Sitemap = servicesFullDetail.map((s) => ({
    url: new URL(`/services/${s.slug}`, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const jobDetail: MetadataRoute.Sitemap = jobs.map((j) => ({
    url: new URL(`/careers/${j.slug}`, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const legal: MetadataRoute.Sitemap = [
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
  ].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }))

  return [...core, ...serviceDetail, ...jobDetail, ...legal]
}
