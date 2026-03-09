import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#features', label: 'Features' },
  { href: '#systems',  label: 'Systems'  },
  { href: '#devlog',   label: 'Devlog'   },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-frost-400/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.8" strokeLinecap="round" className="group-hover:drop-shadow-[0_0_8px_rgba(76,201,240,0.8)] transition-all duration-300">
            <line x1="12" y1="2" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
            <polyline points="10,4 12,6 14,4"/>
            <polyline points="10,20 12,18 14,20"/>
            <polyline points="4,10 6,12 4,14"/>
            <polyline points="20,10 18,12 20,14"/>
          </svg>
          <span className="font-display text-lg font-bold text-white tracking-wide">
            FINAL <span className="text-frost-400">FROST</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm text-slate-400 hover:text-frost-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://store.steampowered.com/app/2927400/Final_Frost/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
          Wishlist on Steam
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-frost-400/10 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-slate-300 hover:text-frost-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://store.steampowered.com/app/2927400/Final_Frost/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center mt-2">
            Wishlist on Steam
          </a>
        </div>
      )}
    </nav>
  )
}
