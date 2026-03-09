const LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#features', label: 'Features' },
  { href: '#systems',  label: 'Systems'  },
  { href: '#devlog',   label: 'Devlog'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-frost-400/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="1.8" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
            <polyline points="10,4 12,6 14,4"/>
            <polyline points="10,20 12,18 14,20"/>
            <polyline points="4,10 6,12 4,14"/>
            <polyline points="20,10 18,12 20,14"/>
          </svg>
          <div>
            <span className="font-display text-base font-bold text-white">
              FINAL <span className="text-frost-400">FROST</span>
            </span>
            <p className="font-body text-[0.65rem] text-slate-600 leading-none mt-0.5">
              A colony survival simulation
            </p>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-xs text-slate-500 hover:text-frost-400 transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-slate-700">
          © {year} Final Frost. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
