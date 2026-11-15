/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#211A14',   // darkest background
        bark: '#3B2E22',       // dark surfaces
        umber: '#6B4F3A',      // muted text on light
        clay: '#A0704C',       // borders / accents
        gold: {
          DEFAULT: '#C9A13B',  // accent on dark backgrounds
          light: '#E2C275',
          dark: '#8A6416',     // accent text on light backgrounds (readable contrast)
        },
        sand: '#EFE6D6',       // light section background
        parchment: '#FBF8F2',  // page background
        ink: '#2A211A',        // body text
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
