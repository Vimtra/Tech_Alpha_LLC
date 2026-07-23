import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

// Legacy URL redirects — the old template site's HTML pages 301 to the new App Router routes.
const legacyRedirects = [
  { source: '/index.html', destination: '/', permanent: true },
  { source: '/about.html', destination: '/about', permanent: true },
  { source: '/services.html', destination: '/services', permanent: true },
  { source: '/clients.html', destination: '/clients', permanent: true },
  { source: '/contact.html', destination: '/contact', permanent: true },
  { source: '/career.html', destination: '/careers', permanent: true },
  { source: '/refferal.html', destination: '/careers', permanent: true },
  { source: '/devops.html', destination: '/services/devops-cicd', permanent: true },
  { source: '/dev.html', destination: '/services/application-development', permanent: true },
  { source: '/bigdata.html', destination: '/services/big-data-analytics', permanent: true },
  { source: '/data.html', destination: '/services/data-center-solutions', permanent: true },
  { source: '/ba.html', destination: '/services/business-analysis', permanent: true },
  { source: '/qa.html', destination: '/services/quality-assurance', permanent: true },
  { source: '/quality.html', destination: '/services/quality-assurance', permanent: true },
  { source: '/pa.html', destination: '/careers/programmer-analyst', permanent: true },
  { source: '/system-engineer-jobs-in-texas.html', destination: '/careers/system-engineer', permanent: true },
  { source: '/project.html', destination: '/careers/it-project-manager', permanent: true },
  { source: '/projects.html', destination: '/careers/it-project-manager', permanent: true },
  { source: '/ad.html', destination: '/services/application-development', permanent: true },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return legacyRedirects
  },
}

export default nextConfig
