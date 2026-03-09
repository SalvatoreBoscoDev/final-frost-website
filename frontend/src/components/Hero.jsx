import Snowfall from './Snowfall'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0">
        {/* Deep space base */}
        <div className="absolute inset-0 bg-dark-950" />

        {/* Radial frost glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(76,201,240,0.07) 0%, transparent 70%),' +
              'radial-gradient(ellipse 50% 40% at 15% 85%, rgba(76,201,240,0.04) 0%, transparent 60%),' +
              'linear-gradient(to bottom, #050b18 0%, #0a1628 50%, #050b18 100%)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(76,201,240,1) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      {/* ── Snow ── */}
      <Snowfall count={70} />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-14 bg-frost-400/40" />
          <span className="font-heading text-frost-400 text-[0.65rem] uppercase tracking-[0.35em]">
            Colony Survival Simulation
          </span>
          <div className="h-px w-14 bg-frost-400/40" />
        </div>

        {/* Title */}
        <h1
          className="font-display font-black mb-6 animate-frost-pulse"
          style={{
            fontSize: 'clamp(3.8rem, 13vw, 10rem)',
            lineHeight: '0.88',
            background: 'linear-gradient(180deg, #ffffff 20%, #b3e0ff 55%, #4cc9f0 85%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(76,201,240,0.25))',
          }}
        >
          FINAL
          <br />
          FROST
        </h1>

        {/* Tagline */}
        <p className="font-heading text-lg md:text-2xl text-slate-300 mb-3 max-w-2xl mx-auto leading-snug">
          Build your colony. Command your people.
        </p>
        <p className="font-heading text-lg md:text-2xl mb-8" style={{ color: '#4cc9f0' }}>
          Survive the eternal winter.
        </p>

        {/* Description */}
        <p className="font-body text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          A deep survival sim where systems bleed into each other — hunger breeds stress, stress breeds conflict, conflict breaks your colony. Every decision has a cost.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="btn-primary text-base">
            ★ Wishlist on Steam
          </a>
          <a href="#about" className="btn-secondary text-base">
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-col sm:flex-row gap-10 justify-center">
          {[
            { value: 'Solo Dev',   label: 'Indie Made'     },
            { value: 'Deep Sim',   label: 'Colony Systems' },
            { value: 'Steam',      label: 'Coming Soon'    },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display text-xl font-bold"
                style={{ color: '#4cc9f0', textShadow: '0 0 15px rgba(76,201,240,0.4)' }}
              >
                {s.value}
              </div>
              <div className="font-heading text-[0.65rem] text-slate-500 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-heading text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-frost-400/50 to-transparent" />
      </div>
    </section>
  )
}
