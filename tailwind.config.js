/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // This gives you the sleek Greycliff/Avenir look for UI and body text
        sans: ['Inter', 'sans-serif'],
        // This gives you the premium "Book" aesthetic for large headings
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        // Custom "Matte" palette to avoid the generic "AI" look
        paper: {
          light: '#FDFDFC', // Primary background (Eggshell)
          DEFAULT: '#F5F5F3', // Secondary sections
          dark: '#EBEBE9',   // Borders and subtle dividers
        },
        ink: {
          light: '#404040',  // Muted body text
          DEFAULT: '#111111', // Strong headings
          dark: '#000000',   // Pure black accents
        },
      },
      letterSpacing: {
        tightest: '-.06em',
        tighter: '-.04em',
        widest: '.2em',
      },
    },
  },
  plugins: [],
};