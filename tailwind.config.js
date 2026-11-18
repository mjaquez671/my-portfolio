/** @type {import('tailwindcss').Config} */
// Same token names as Mario's site so the shared components work unchanged;
// the values give Kate's site its own navy-and-brass rowing-club palette.
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#0F1C2E',   // darkest background (deep navy)
        bark: '#1B2E47',       // dark surfaces
        umber: '#4A5B70',      // muted text on light
        clay: '#7F93A8',       // borders / accents
        gold: {
          DEFAULT: '#C8A45C',  // brass accent on dark backgrounds
          light: '#E0C78F',
          dark: '#8A6A26',     // accent text on light backgrounds (readable contrast)
        },
        sand: '#E9EDF1',       // light section background (river mist)
        parchment: '#F8F9FA',  // page background
        ink: '#17212E',        // body text
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
