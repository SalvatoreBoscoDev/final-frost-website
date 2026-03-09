const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Colony Management',
    description:
      'Build a thriving settlement from scratch. Assign work schedules, manage resource chains, and watch your colony grow — or collapse under the weight of the endless winter.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <line x1="18" y1="8" x2="21" y2="8"/>
        <line x1="18" y1="11" x2="20" y2="13"/>
      </svg>
    ),
    title: 'Deep Unit System',
    description:
      'Every colonist tracks hunger, temperature, stress, and physical injuries across 6 body parts. Skills, personalities, and faction allegiances shape how they act and react.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Squad Control',
    description:
      'Form squads with hotkey controls and send them into the frozen world. Toggle between full autonomy and direct command. Right-click gives context-sensitive orders.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M7 14s1 2 5 2 5-2 5-2"/>
      </svg>
    ),
    title: 'Farming & Harvests',
    description:
      'A full agricultural cycle — till the soil, plant, maintain, and harvest. Zone-based field assignment keeps your colonists on task without micromanaging every step.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'World Map & Exploration',
    description:
      'A node-based world map with random encounters during transit. Every journey into the frost is a calculated risk. Come back with supplies, or don\'t come back at all.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: 'Research & Crafting',
    description:
      'Unlock technologies at dedicated research stations. Passive crafting with slot-based priority queues — your production line runs even when you\'re focused elsewhere.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      {/* Subtle bg tint */}
      <div className="absolute inset-0 bg-dark-900/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">What Awaits</span>
          <h2 className="section-title">
            Built to Break You
            <br />
            <span className="text-frost-400">And Let You Rebuild</span>
          </h2>
          <p className="font-body text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Final Frost isn't about winning — it's about the story of your colony. The
            triumphs, the crises, and the quiet moment before the next disaster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="frost-card p-6 animate-on-scroll"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="w-10 h-10 text-frost-400 mb-4">{f.icon}</div>
              <h3 className="font-heading text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="font-body text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
