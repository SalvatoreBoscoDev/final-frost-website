import { useState, useEffect } from 'react'
import axios from 'axios'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Devlog() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('/api/devlog/')
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="devlog" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-dark-900/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">Dev Updates</span>
          <h2 className="section-title">
            From the
            <span className="text-frost-400"> Workshop</span>
          </h2>
          <p className="font-body text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Follow the development of Final Frost — what's built, what's breaking, and what's next.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div
              className="w-8 h-8 rounded-full border-2 border-frost-400 border-t-transparent animate-spin"
            />
          </div>
        ) : posts.length === 0 ? (
          <div className="frost-card p-14 text-center max-w-md mx-auto animate-on-scroll">
            <svg
              width="40" height="40" viewBox="0 0 24 24" fill="none"
              stroke="rgba(76,201,240,0.4)" strokeWidth="1.4" strokeLinecap="round"
              className="mx-auto mb-5"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <h3 className="font-heading text-white font-semibold mb-2">Devlog Coming Soon</h3>
            <p className="font-body text-slate-400 text-sm leading-relaxed">
              Dev updates will appear here. Subscribe below to be notified when the first post goes live.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <article
                key={post.id}
                className="frost-card p-6 animate-on-scroll flex flex-col"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <time className="font-heading text-[0.65rem] text-frost-400 uppercase tracking-widest">
                  {formatDate(post.published_at)}
                </time>
                <h3 className="font-heading text-base font-semibold text-white mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-frost-400/10">
                  <a
                    href={`/devlog/${post.slug}`}
                    className="font-heading text-xs text-frost-400 hover:text-white transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
