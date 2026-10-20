/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js'
  ],
  safelist: [
    // Responsive nav utilities that get missed due to multiline HTML attributes
    'hidden', 'flex', 'block',
    'lg:flex', 'lg:hidden', 'lg:justify-center',
    'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-4', 'lg:col-span-6', 'lg:col-span-8', 'lg:col-span-12',
    'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4',
    'lg:text-xl', 'lg:text-2xl', 'lg:text-4xl', 'lg:text-5xl', 'lg:text-6xl',
    'lg:gap-8', 'lg:gap-12', 'lg:gap-16',
    'md:block', 'md:hidden', 'md:flex-row',
    'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4',
    'md:text-base', 'md:text-lg', 'md:text-xl', 'md:text-2xl', 'md:text-4xl', 'md:text-5xl', 'md:text-6xl',
    'md:text-left', 'md:text-justify',
    'md:h-12', 'md:h-16', 'md:w-auto',
    'md:p-6', 'md:p-8', 'md:p-12',
    'md:col-span-1', 'md:col-span-2',
    'sm:flex-row', 'sm:grid-cols-2', 'sm:items-center', 'sm:text-left', 'sm:text-justify',
    'sm:p-4', 'sm:p-6',
    'hover:opacity-80', 'hover:shadow-lg', 'hover:shadow-md',
    'focus:outline-none', 'hover:outline-none',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#10131A',
        charcoal: '#1A1F2A',
        slate: '#252D3A',
        'warm-white': '#F4F1EA',
        ivory: '#EDE8DF',
        gold: '#B8965A',
        'gold-light': '#D4B07A',
        'gold-faint': '#F0E8D6',
      }
    }
  },
  plugins: [],
}
