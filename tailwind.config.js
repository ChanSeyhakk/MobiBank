/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1f6feb',
        'brand-dark': '#1a5fe0',
        navy: '#0b1b4d',
        muted: '#8a96ad',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
