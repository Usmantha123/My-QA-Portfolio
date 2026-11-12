/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0c',
          surface: '#131317',
          border: '#24242b',
          muted: '#9d9dae',
          secondary: '#cac9d6',
          text: '#f3f2ec',
        },
        lime: {
          accent: '#b8f400',
          hover: '#c8ff00',
          dim: '#9ad000',
        },
        surface: {
          DEFAULT: 'var(--color-bg)',
          card: 'var(--color-card)',
          hover: 'var(--color-card-hover)',
          secondary: 'var(--color-bg-secondary)',
        },
        content: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          text: 'var(--color-accent-text)',
        },
        divider: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        headline: '-2px',
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        'lime-offset': '4px 4px 0px 0px #b8f400',
        'lime-offset-lg': '8px 8px 0px 0px #b8f400',
        'lime-glow': '0 0 25px rgba(184, 244, 0, 0.25)',
        'dark-offset': '4px 4px 0px 0px #0a0a0c',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
