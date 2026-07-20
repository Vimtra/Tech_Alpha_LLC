import { Link, Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import AuroraBackground from './layout/AuroraBackground'
import Container from './ui/Container'
import { contactInfo } from '../data/siteContent'
import { navigationLinks } from '../data/navigation'

function Layout() {
  return (
    <div className="relative min-h-screen text-ink">
      <AuroraBackground />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="pt-10">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-hairline bg-surface/40 py-14 text-ink-muted backdrop-blur-sm">
        <Container className="space-y-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <img src="/logo-3.png" alt="Tech Alpha" className="h-9 w-auto" />
              <p className="max-w-xs text-sm leading-6 text-ink-muted">
                DevOps, cloud, and ERP consulting with enterprise-grade delivery — from McKinney, TX to
                global organizations.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-soft">Contact</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="transition hover:text-ink">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="transition hover:text-ink">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="leading-6">{contactInfo.address}</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-soft">Quick links</p>
              <ul className="mt-4 space-y-2 text-sm">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="transition hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-hairline pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} Tech Alpha LLC. All rights reserved.</span>
            <span className="font-mono text-xs uppercase tracking-[0.18em]">McKinney, TX · Enterprise IT</span>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
