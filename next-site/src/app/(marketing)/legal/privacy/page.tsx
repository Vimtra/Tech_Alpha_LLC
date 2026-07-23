import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { privacyPolicy } from '@/content/legal'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Tech Alpha LLC collects, uses, and protects personal information.',
  path: '/legal/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <LegalPage {...privacyPolicy} />
      <JsonLd
        id="jsonld-privacy-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Privacy Policy', url: `${siteConfig.url}/legal/privacy` },
        ])}
      />
    </>
  )
}
