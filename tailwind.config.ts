import type { Config } from 'tailwindcss';

// ponytail: Lean token mapping using semantic CSS custom properties
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        text: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          contrast: 'var(--accent-contrast)',
        },
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      spacing: {
        '18': '4.5rem',
        '28': '7rem', // 112px
        '16': '4rem', // 64px
      },
    },
  },
  plugins: [],
};

export default config;
