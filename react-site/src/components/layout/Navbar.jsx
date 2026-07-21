import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contactCta, navigationLinks } from '../../data/navigation'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <div
        className="mx-auto max-w-7xl rounded-[26px] transition-all duration-500"
        style={{
          background: isScrolled ? 'rgba(9, 16, 35, 0.55)' : 'rgba(9, 16, 35, 0.35)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(120, 170, 255, 0.10)',
          boxShadow: isScrolled
            ? '0 20px 60px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04)'
            : '0 12px 36px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        }}
      >
        <div className="flex min-h-[68px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
          <Link
            to="/"
            aria-label="Tech Alpha — home"
            className="flex shrink-0 items-center gap-3 rounded-2xl"
          >
            <img src="/logo-3.png" alt="Tech Alpha" className="h-9 w-auto object-contain sm:h-10" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-0.5 rounded-pill p-1 lg:flex"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(120, 170, 255, 0.08)',
            }}
          >
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group relative rounded-pill px-3 py-2.5 text-sm font-medium transition duration-300 xl:px-4 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className="absolute inset-0 rounded-pill transition duration-300"
                      style={{
                        background: isActive
                          ? 'rgba(79, 140, 255, 0.10)'
                          : 'transparent',
                        boxShadow: isActive
                          ? '0 0 20px rgba(79, 140, 255, 0.18), inset 0 0 0 1px rgba(120, 170, 255, 0.10)'
                          : 'none',
                      }}
                    />
                    {!isActive && (
                      <span
                        className="absolute inset-0 rounded-pill opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{ background: 'rgba(79, 140, 255, 0.08)' }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px rounded-pill transition duration-300 ${
                        isActive
                          ? 'scale-x-100 opacity-100'
                          : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70'
                      }`}
                      style={{ background: 'linear-gradient(90deg, transparent, #F89723, transparent)' }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <Link
              to={contactCta.to}
              className="group inline-flex h-11 shrink-0 items-center justify-center rounded-pill bg-brand-gradient px-5 text-sm font-semibold text-[#12161f] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              style={{ boxShadow: '0 8px 24px rgba(248, 151, 35, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25)' }}
            >
              <span className="whitespace-nowrap">{contactCta.label}</span>
              <span className="ml-2 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill border border-hairline bg-white/[0.04] text-ink transition duration-300 hover:border-brand/40 hover:bg-white/[0.08] lg:hidden"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-pill bg-current transition duration-300 ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-pill bg-current transition duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-pill bg-current transition duration-300 ${
                  isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Scroll-progress hairline */}
        <div className="relative mx-4 h-px overflow-hidden sm:mx-5 lg:mx-6">
          <div
            className="absolute inset-y-0 left-0 bg-brand-gradient transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-nav"
          className={`grid transition-all duration-300 lg:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-3 mb-3 mt-2 border-t border-hairline pt-3">
              <nav
                aria-label="Mobile"
                className="rounded-[22px] border border-hairline bg-surface/80 p-2 backdrop-blur-xl"
              >
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `mb-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 last:mb-0 ${
                        isActive
                          ? 'bg-white/[0.07] text-ink'
                          : 'text-ink-muted hover:bg-white/[0.05] hover:text-ink'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-brand transition duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
                <Link
                  to={contactCta.to}
                  className="mt-3 flex items-center justify-center rounded-pill bg-brand-gradient px-4 py-3 text-sm font-semibold text-[#12161f] shadow-brand"
                >
                  {contactCta.label}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
