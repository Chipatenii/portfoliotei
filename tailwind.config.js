/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0a0a0a',
        'brand-gunmetal': '#121212',
        'brand-white': '#e5e5e5',
        'brand-cyan': '#00f0ff',
        'brand-teal': '#64ffda',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
