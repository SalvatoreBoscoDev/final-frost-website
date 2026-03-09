import { useState } from 'react'

const FAQS = [
  {
    q: "Do I have to build my own colony, or can I play entirely through NPC towns?",
    a: "Entirely your call. You can send your people straight into the nearest NPC settlement from day one and never lay a single foundation stone of your own. Work their jobs, complete quests, build inside their walls, and grow your influence from the inside. A personal colony is one way to play — not the only way.",
  },
  {
    q: "Can my units actually live in NPC towns permanently, not just visit?",
    a: "Yes. Assign units to rent lodging in an NPC settlement and they'll stay indefinitely — sleeping in their rented beds, picking up local work, and integrating into the town's daily rhythm. They're still under your command. Think of it like stationing a team inside a foreign city while you run operations elsewhere.",
  },
  {
    q: "Can I build structures inside someone else's town?",
    a: "With enough reputation, yes. As your standing with a faction grows, you unlock building slots within their town boundaries. You can construct workshops, storage facilities, or lodging that sits inside their existing grid — expanding their settlement and yours at the same time.",
  },
  {
    q: "What happens if an NPC town I'm embedded in gets attacked or destroyed?",
    a: "Your units fight alongside the defenders — or flee, depending on their morale and loyalty. If the town falls, your embedded units lose their lodging, local jobs, and any faction-specific perks tied to that settlement. It's a real loss that ripples through every other system. Choose your alliances carefully.",
  },
  {
    q: "Can I run both a personal colony AND units inside NPC towns simultaneously?",
    a: "Absolutely — and that tension is central to the game. Split your people across your settlement and multiple NPC towns. Use your colony as a production base, your embedded units to run quests and gather intel, and your squads to move resources between them. Managing all of it at once is the challenge.",
  },
  {
    q: "How does faction reputation actually work?",
    a: "Reputation is earned through work, completed quests, and trade — and lost through failures, broken contracts, or siding with rival factions. Higher reputation unlocks better contracts, building rights inside towns, cheaper lodging, and access to restricted NPC dialogue. Factions remember what you do, and word travels.",
  },
  {
    q: "How is Final Frost different from RimWorld or Kenshi?",
    a: "RimWorld is event-driven colony management — brilliant, but one settlement, one story. Kenshi gives you an open world but your colony stays the center of gravity. Final Frost blends both: the systemic depth of RimWorld's colonists with Kenshi's open-world factions — and adds living inside NPC towns as a genuine first-class playstyle, not an afterthought.",
  },
  {
    q: "Is combat a big part of the game?",
    a: "It's there, but it's deliberate and costly. Injuries persist across every other system — a wounded colonist is less productive, more stressed, and a drain on your medical resources. There's no zerg-rushing enemies and shrugging it off. Every fight you pick has a recovery cost, and the frost doesn't pause while you heal.",
  },
  {
    q: "When does Final Frost release?",
    a: "Final Frost is in active solo development. No release date yet — but the Steam page is live and wishlisting helps more than you know. Every wishlist signals to Steam's algorithm that this game matters. Follow along and you'll hear it first.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-dark-900/40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">Got Questions</span>
          <h2 className="section-title">
            Things People Ask
            <br />
            <span className="text-frost-400">Before the Winter Answers</span>
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Especially about living in other people's towns.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 animate-on-scroll">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="frost-card rounded-xl overflow-hidden transition-all duration-200"
              style={openIndex === i ? { borderColor: 'rgba(76,201,240,0.3)' } : {}}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                onClick={() => toggle(i)}
              >
                <span className={`font-heading text-sm md:text-base font-medium leading-snug transition-colors duration-200 ${
                  openIndex === i ? 'text-frost-400' : 'text-slate-200 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-5 h-5 mt-0.5 transition-transform duration-300 text-frost-400"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? '400px' : '0px' }}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-frost-400/10 mb-5" />
                  <p className="font-body text-slate-400 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="font-body text-slate-500 text-sm mb-4">
            Still curious? The best way to follow development is to wishlist and watch the devlog.
          </p>
          <a
            href="https://store.steampowered.com/app/2927400/Final_Frost/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            ★ Wishlist on Steam
          </a>
        </div>
      </div>
    </section>
  )
}
