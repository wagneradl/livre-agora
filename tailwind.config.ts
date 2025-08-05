import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eafffb',
          100: '#c6fff3',
          200: '#8fffea',
          300: '#52f2d6',
          400: '#2bd5be',
          500: '#12bfa9',
          600: '#0aa08f',
          700: '#0a7f74',
          800: '#0c655f',
          900: '#0d524e'
        },
        ocean: {
          900: '#0b2c4a',
          800: '#0e3a61',
          700: '#134c80'
        }
      }
    }
  },
  plugins: []
}
export default config