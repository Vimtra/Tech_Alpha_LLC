/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Canvas + surfaces (dark, immersive)
        canvas: '#050816',
        surface: {
          DEFAULT: '#0D1328',
          raised: '#131A33',
        },
        // Brand — amber leads
        brand: {
          DEFAULT: '#F89723',
          deep: '#C56B16',
          soft: '#FFD18A',
        },
        // Aurora — secondary background / highlight layer
        aurora: {
          blue: '#4F8CFF',
          cyan: '#00C2FF',
          violet: '#5E5CFF',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#94A3B8',
          faint: '#64748B',
        },
        hairline: 'rgba(255, 255, 255, 0.10)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(3, 6, 20, 0.55)',
        brand: '0 18px 45px rgba(248, 151, 35, 0.28)',
        'brand-hover': '0 24px 60px rgba(248, 151, 35, 0.36)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #C56B16 0%, #F89723 45%, #FFB958 100%)',
        'aurora-gradient': 'linear-gradient(120deg, #4F8CFF 0%, #00C2FF 100%)',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '0.55' },
          '50%': { transform: 'translate3d(3%, -4%, 0) scale(1.08)', opacity: '0.8' },
        },
        'aurora-drift-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1.05)', opacity: '0.45' },
          '50%': { transform: 'translate3d(-4%, 3%, 0) scale(1)', opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'node-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        flow: {
          from: { strokeDashoffset: '0' },
          to: { strokeDashoffset: '-22' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
        'globe-sweep': {
          from: { transform: 'translateX(-220px)' },
          to: { transform: 'translateX(680px)' },
        },
        'hero-in': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-float-blob': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)',      opacity: '0.06' },
          '50%':       { transform: 'translate(3%,-4%) scale(1.08)', opacity: '0.10' },
        },
        'hero-streak': {
          '0%, 100%': { transform: 'translate3d(-6%, 0, 0) rotate(-3deg)', opacity: '0.55' },
          '50%':      { transform: 'translate3d(10%, -3%, 0) rotate(-3deg)', opacity: '0.85' },
        },
        'hero-streak-alt': {
          '0%, 100%': { transform: 'translate3d(4%, 0, 0) rotate(2deg)', opacity: '0.4' },
          '50%':      { transform: 'translate3d(-6%, 2%, 0) rotate(2deg)', opacity: '0.7' },
        },
      },
      animation: {
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'aurora-drift-slow': 'aurora-drift-slow 24s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 48s linear infinite',
        'spin-reverse': 'spin-reverse 64s linear infinite',
        'node-pulse': 'node-pulse 3.2s ease-in-out infinite',
        flow: 'flow 2.4s linear infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'globe-sweep': 'globe-sweep 9s linear infinite',
        'hero-in': 'hero-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'hero-float-blob': 'hero-float-blob 18s ease-in-out infinite',
        'hero-streak': 'hero-streak 26s ease-in-out infinite',
        'hero-streak-alt': 'hero-streak-alt 32s ease-in-out infinite',
      },
    },
  },
  safelist: [
    '-z-19', '-z-18', '-z-17', '-z-16',
  ],
  plugins: [require('@tailwindcss/typography')],
}
