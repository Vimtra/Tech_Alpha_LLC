import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { cookiePolicy } from '@/content/legal'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description: 'How Tech Alpha LLC uses cookies on techalphallc.com.',
  path: '/legal/cookies',
})

export default function CookiesPage() {
  return (
    <>
      <LegalPage {...cookiePolicy} />
      <JsonLd
        id="jsonld-cookies-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Cookie Policy', url: `${siteConfig.url}/legal/cookies` },
        ])}
      />
    </>
  )
}
