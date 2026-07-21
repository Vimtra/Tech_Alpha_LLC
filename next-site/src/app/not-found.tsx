import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Page not found',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">Error 404</p>
      <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Page not found.</h1>
      <p className="mt-6 max-w-xl text-lg text-ink-muted">
        The page you're looking for has moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-11 items-center justify-center rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161f] shadow-brand"
      >
        Back to home
      </Link>
    </main>
  )
}
