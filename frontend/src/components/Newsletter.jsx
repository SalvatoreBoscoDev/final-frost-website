import { useState } from 'react'
import axios from 'axios'

export default function Newsletter() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState('idle')   // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await axios.post('/api/newsletter/', { email })
      setStatus('success')
      setMessage(res.data.message)
      setEmail('')
    } catch (err) {
      setStatus('error')
      const data = err.response?.data
      if (data?.email?.[0]) {
        setMessage(data.email[0])
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    }
  }

  return (
    <section className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center animate-on-scroll">
        <span className="section-subtitle">Stay Informed</span>
        <h2 className="section-title">
          Get Notified
          <br />
          <span className="text-frost-400">When the Frost Falls</span>
        </h2>
        <p className="font-body text-slate-400 mb-10 text-sm md:text-base">
          Subscribe for development updates, early access announcements, and launch news.
          No spam — just cold, hard progress reports.
        </p>

        {status === 'success' ? (
          <div className="frost-card p-10">
            <svg
              width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="#4cc9f0" strokeWidth="1.5" strokeLinecap="round"
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
            <p className="font-heading text-frost-400 font-semibold text-lg">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-dark-800 border border-frost-400/20 rounded-md px-4 py-3 font-body text-sm text-white placeholder-slate-600 focus:outline-none focus:border-frost-400/50 transition-colors"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-body text-red-400 text-sm mt-3">{message}</p>
        )}
      </div>
    </section>
  )
}
