import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { termsOfService } from '@/content/legal'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms governing use of the Tech Alpha LLC website.',
  path: '/legal/terms',
})

export default function TermsPage() {
  return (
    <>
      <LegalPage {...termsOfService} />
      <JsonLd
        id="jsonld-terms-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteConfig.url },
          { name: 'Terms of Service', url: `${siteConfig.url}/legal/terms` },
        ])}
      />
    </>
  )
}
