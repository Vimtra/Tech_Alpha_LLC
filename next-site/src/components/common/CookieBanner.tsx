'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const KEY = 'ta-cookie-consent-v1'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true)
    } catch {
      // Storage may be unavailable (private mode) — banner stays hidden by default.
    }
  }, [])

  const record = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      // Ignore storage errors.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl p-4 shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-5"
      style={{
        background:
          'linear-gradient(rgba(9,16,35,0.75), rgba(9,16,35,0.75)) padding-box, ' +
          'linear-gradient(135deg, rgba(120,170,255,0.30), rgba(120,170,255,0.08) 55%, rgba(248,151,35,0.16)) border-box',
        border: '1px solid transparent',
        backdropFilter: 'blur(24px) saturate(140%)',
        WebkitBackdropFilter: 'blur(24px) saturate(140%)',
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          aria-hidden="true"
          className="text-brand-soft inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/[0.10]"
        >
          <Cookie className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <div className="flex-1">
          <p className="text-ink text-sm font-semibold">We use cookies</p>
          <p className="text-ink-muted mt-1 text-[13px] leading-[1.6]">
            Essential cookies keep the site secure. Optional cookies help us understand aggregate usage.
            Read our{' '}
            <Link
              href="/legal/cookies"
              className="text-brand-soft underline decoration-brand/30 underline-offset-2 hover:decoration-brand"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => record('accepted')}
              className="focus-visible:ring-brand inline-flex h-9 items-center justify-center rounded-full bg-brand-gradient px-4 text-xs font-semibold text-[#12161F] transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
              style={{
                boxShadow:
                  '0 8px 20px rgba(248,151,35,0.24), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => record('declined')}
              className="text-ink hover:text-brand-soft inline-flex h-9 items-center justify-center rounded-full border border-hairline bg-white/[0.03] px-4 text-xs font-semibold transition hover:border-white/20"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => record('declined')}
          aria-label="Dismiss cookie notice"
          className="text-ink-faint hover:text-ink absolute right-3 top-3 transition sm:static"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
