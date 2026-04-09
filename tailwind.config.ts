import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        r1: '#EE4540',
        r2: '#C72C41',
        r3: '#801336',
        r4: '#510A32',
        r5: '#20142C',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'wv': 'wv 1.1s ease-in-out infinite',
        'scrollBounce': 'scrollBounce 1.85s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-33.333%)' },
        },
        wv: {
          '0%, 100%': { transform: 'scaleY(0.22)' },
          '50%':      { transform: 'scaleY(1)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(7px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
