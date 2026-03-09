import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        frost: {
          50:  '#f0f9ff',
          100: '#dff2ff',
          200: '#b3e0ff',
          300: '#7bc8f5',
          400: '#4cc9f0',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          950: '#050b18',
          900: '#0a1628',
          800: '#0d1b2e',
          700: '#0f2040',
          600: '#1a3060',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        heading: ['"Exo 2"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        frostPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(76,201,240,0.3))' },
          '50%':      { filter: 'drop-shadow(0 0 50px rgba(76,201,240,0.7))' },
        },
        snowfall: {
          '0%':   { transform: 'translateY(-20px) translateX(0px)', opacity: '0' },
          '5%':   { opacity: '0.9' },
          '95%':  { opacity: '0.5' },
          '100%': { transform: 'translateY(110vh) translateX(40px)', opacity: '0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'frost-pulse': 'frostPulse 4s ease-in-out infinite',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
        shimmer:       'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
