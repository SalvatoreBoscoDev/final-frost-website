import { useState } from 'react'

const SYSTEMS = [
  {
    id: 'units',
    label: 'Unit System',
    title: 'Every Colonist Lives and Breathes',
    description:
      "Units aren't just numbers. Each colonist tracks hunger, temperature, stress, and physical injuries. A hungry colonist gets stressed. A stressed colonist gets careless. A careless colonist gets hurt — and the chain never ends.",
    details: [
      'Vitals: hunger, temperature, stress, morale',
      'Skills: mining, lumbering, farming, combat, research, hauling',
      'Dual-mode: autonomous Colonist or direct Adventurer control',
      'Body injury system across 6 tracked body parts with frostbite visualization',
      'Tick-based TaskRunner state machine for fluid autonomous behaviour',
      'Personalities and faction allegiances that shape inter-colonist dynamics',
    ],
  },
  {
    id: 'farming',
    label: 'Farming',
    title: 'Feed Your Colony or Watch It Starve',
    description:
      "A full agricultural cycle with tilling, planting, maintenance, and harvesting phases. Assign colonists to farm zones and they'll work the soil on schedule — but neglect a phase and your harvest suffers when the frost comes.",
    details: [
      'Zone-based field assignment system',
      'Full growth cycle: till → plant → maintain → harvest',
      'Colonists auto-prioritize farm tasks by zone urgency',
      'Seasonal yield variation tied to the day/night cycle',
    ],
  },
  {
    id: 'crafting',
    label: 'Crafting',
    title: 'A Factory That Never Sleeps',
    description:
      "Passive crafting stations inspired by Rust's approach. Set your priorities, assign your colonists, and your production line runs autonomously — until resources dry up or someone forgets to haul.",
    details: [
      'Passive station system with slot-based output queues',
      'Smelting priority configuration per station',
      'Auto-haul integration keeps stations fed',
      'Recipes unlocked progressively through research',
    ],
  },
  {
    id: 'combat',
    label: 'Combat',
    title: 'Violence Has Consequences',
    description:
      'Combat is deliberate. Injuries persist, morale crashes after losses, and a wounded colonist is a liability in every other system. Choose your fights carefully — the frost is dangerous enough without adding enemies.',
    details: [
      'Squad-based tactical combat with hotkey controls (Shift+G, 1–9)',
      'Persistent injuries that require recovery time',
      'Morale system that cascades into productivity and social stability',
      'Context-sensitive right-click command menus for squads',
    ],
  },
  {
    id: 'research',
    label: 'Research',
    title: 'Knowledge Is Survival',
    description:
      'Unlock new technologies through dedicated research workstations. Assign your sharpest colonists and let them work. Falling behind on research means falling behind on the tools you need to survive.',
    details: [
      'Research via dedicated workstation liveries',
      'Skill-weighted research speed per assigned colonist',
      'Unlocks cascade into crafting, farming, and colony tech trees',
      'Passive background research while colonists are assigned elsewhere',
    ],
  },
  {
    id: 'factions',
    label: 'NPC Towns',
    title: 'A Living World Full of Other People',
    description:
      "You don't have to build alone in the wilderness. NPC towns are fully living settlements — your units can move in, rent lodging, find work, and construct buildings within their walls. Integrate, expand, and grow your influence without ever laying a single foundation stone of your own.",
    details: [
      'Units can live and work inside NPC settlements alongside their citizens',
      'Build structures within NPC town boundaries — grow them from inside',
      'Earn reputation with town factions through work, trade, and quests',
      'Faction allegiances affect unit morale, dialogue options, and available contracts',
      'Each NPC town has its own economy, politics, and needs you can exploit or support',
    ],
  },
  {
    id: 'quests',
    label: 'Quests',
    title: 'Every Deal Has Terms',
    description:
      "The world has problems and you have people. Take contracts from faction leaders, complete delivery runs, clear bandit camps, or help a struggling town survive the winter. Quests reward reputation, resources, and access — but some jobs come with strings attached.",
    details: [
      'Quest system driven by NPC town needs and faction politics',
      'Dialogue choices that affect faction reputation and future opportunities',
      'Contract rewards scale with difficulty and relationship standing',
      'Failed quests have consequences — factions remember',
      'Some quests unlock permanent town perks, building slots, or trade routes',
    ],
  },
]

export default function Systems() {
  const [activeId, setActiveId] = useState(SYSTEMS[0].id)
  const current = SYSTEMS.find((s) => s.id === activeId)

  return (
    <section id="systems" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">Under the Hood</span>
          <h2 className="section-title">
            Interlocking Systems,
            <br />
            <span className="text-frost-400">A World That Reacts</span>
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            No system operates in isolation. Your colonists, the NPC towns around you, the quests you take — they all feed into each other. That's what makes it dangerous.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 animate-on-scroll">
          {/* Tab list */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {SYSTEMS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-lg font-heading text-sm font-medium transition-all duration-200 border ${
                  activeId === s.id
                    ? 'border-frost-400/40 text-frost-400'
                    : 'border-transparent text-slate-500 hover:text-slate-200 hover:border-slate-700'
                }`}
                style={
                  activeId === s.id
                    ? { background: 'rgba(76,201,240,0.08)' }
                    : {}
                }
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="md:col-span-3 frost-card p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              {current.title}
            </h3>
            <p className="font-body text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
              {current.description}
            </p>
            <ul className="space-y-2.5">
              {current.details.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="text-frost-400 text-xs mt-1 flex-shrink-0">▸</span>
                  <span className="font-body text-sm text-slate-300 leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
