import { useEffect, useRef } from 'react'

export default function Snowfall({ count = 65 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const flakes = []

    for (let i = 0; i < count; i++) {
      const flake = document.createElement('div')
      const size = Math.random() * 2.5 + 1
      const left = Math.random() * 100
      const duration = Math.random() * 12 + 7
      const delay = Math.random() * 25 - 12

      flake.className = 'snowflake'
      flake.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.55 + 0.2};
      `
      container.appendChild(flake)
      flakes.push(flake)
    }

    return () => flakes.forEach((f) => f.remove())
  }, [count])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
    />
  )
}
