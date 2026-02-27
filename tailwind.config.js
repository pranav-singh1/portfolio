/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        accent: '#f5a623',
        'accent-dim': 'rgba(245, 166, 35, 0.15)',
        dim: '#888',
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
