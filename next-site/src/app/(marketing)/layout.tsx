import type { ReactNode } from 'react'
import { AuroraBackground } from '@/components/layout/AuroraBackground'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="text-ink relative min-h-screen">
      <AuroraBackground />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
