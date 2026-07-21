'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand-soft">Something went wrong</p>
      <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Unexpected error.</h1>
      <p className="mt-6 max-w-xl text-lg text-ink-muted">
        We've logged the issue. Try again or head back to the home page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex h-11 items-center justify-center rounded-pill bg-brand-gradient px-6 text-sm font-semibold text-[#12161f] shadow-brand"
      >
        Try again
      </button>
    </main>
  )
}
