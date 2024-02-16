import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: {
          dark: '#1E6F9F',
          DEFAULT: '#4EA8DE',
        },
        purple: {
          DEFAULT: '#8284FA',
          dark: '#5E60CE',
        },
      },
      borderRadius: {
        def: '0.5rem',
      },
      keyframes: {
        loading: {
          '100%': { transform: 'rotate(1turn)' },
        },
      },
      animation: {
        loading: 'loading 1s infinite linear',
      },
    },
  },
  plugins: [],
}

export default config
