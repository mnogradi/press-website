/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#10131A',
        'charcoal': '#1A1F2A',
        'slate': '#252D3A',
        'warm-white': '#F4F1EA',
        'ivory': '#EDE8DF',
        'gold': '#B8965A',
        'gold-light': '#D4B07A',
        'gold-faint': '#F0E8D6',
      }
    }
  },
  plugins: [],
}
