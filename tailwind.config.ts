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
        grey: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        greyChecked: '#B3B3B3',
        blue: {
          200: '#4EA8DE',
          500: '#1E6F9F',
          800: '#1A597E',
          900: '#144b6b',
        },
        purple: {
          200: '#8284FA',
          500: '#5E60CE',
        },
        transparent: 'transparent',
      },
      height: {
        49: '49px',
        50: '50px',
        54: '54px',
        150: '150px',
        200: '200px',
        335: '335px',
      },
      borderRadius: {
        def: '8px',
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
