const PILLARS = [
  { label: 'Colony Management',    desc: 'Build and expand your frozen settlement' },
  { label: 'Squad Expeditions',    desc: 'Send teams into the dangerous world map'  },
  { label: 'Living Colonists',     desc: 'Every unit has vitals, traits, and a will' },
  { label: 'Cascading Failures',   desc: 'Systems that feed into each other' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div className="animate-on-scroll">
            <span className="section-subtitle">The Game</span>
            <h2 className="section-title">
              A Colony Sim That
              <br />
              <span className="text-frost-400">Never Lets You Rest</span>
            </h2>
            <p className="font-body text-slate-400 leading-relaxed mb-5">
              Final Frost is a deep colony survival simulation set in an unrelenting frozen world.
              Manage your colonists, build your settlement, and send squads into the wilderness —
              all while the cold slowly tightens its grip.
            </p>
            <p className="font-body text-slate-400 leading-relaxed mb-10">
              Inspired by Kenshi and RimWorld, Final Frost is built around systemic
              interdependence. Hunger leads to stress. Stress leads to conflict. Conflict
              cripples your production chain. Every system bleeds into every other, and the
              winter waits for no one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((p) => (
                <div key={p.label} className="flex gap-3 items-start">
                  <div
                    className="w-0.5 rounded-full flex-shrink-0 mt-1 h-8"
                    style={{ background: 'linear-gradient(to bottom, #4cc9f0, transparent)' }}
                  />
                  <div>
                    <div className="font-heading text-sm text-white font-semibold">{p.label}</div>
                    <div className="font-body text-xs text-slate-500 mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="frost-card overflow-hidden rounded-2xl relative">
              <div
                className="aspect-video flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #0a1628, #0f2040, #0a1628)',
                }}
              >
                {/* Placeholder content */}
                <div className="relative z-10 text-center select-none">
                  <svg
                    width="56" height="56" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(76,201,240,0.4)" strokeWidth="1.2" strokeLinecap="round"
                    className="mx-auto mb-4"
                  >
                    <line x1="12" y1="2" x2="12" y2="22"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
                    <polyline points="10,4 12,6 14,4"/>
                    <polyline points="10,20 12,18 14,20"/>
                    <polyline points="4,10 6,12 4,14"/>
                    <polyline points="20,10 18,12 20,14"/>
                  </svg>
                  <p className="font-heading text-slate-500 text-sm">Screenshots Coming Soon</p>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-frost-400/30" />
                <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-frost-400/30" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-frost-400/30" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-frost-400/30" />
              </div>

              {/* Caption bar */}
              <div className="px-5 py-3 border-t border-frost-400/10">
                <p className="font-heading text-xs text-slate-500 uppercase tracking-widest">
                  In Development — Unity Engine
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
