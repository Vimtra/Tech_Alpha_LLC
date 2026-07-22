import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { JsonLd } from '@/components/common/JsonLd'
import { siteConfig } from '@/constants/siteConfig'
import { buildMetadata } from '@/lib/seo'
import { organizationJsonLd, websiteJsonLd } from '@/lib/jsonld'
import '@/styles/globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata(),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-3.png', type: 'image/png' },
    ],
    apple: '/logo-3.png',
  },
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="bg-canvas text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <JsonLd id="jsonld-organization" data={organizationJsonLd()} />
        <JsonLd id="jsonld-website" data={websiteJsonLd()} />
      </body>
    </html>
  )
}
