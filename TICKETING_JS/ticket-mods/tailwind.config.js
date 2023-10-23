/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: "#AEFFd8",
        page: "#FFF9AE",
        card: "#FFC1E3",
        "card-hover": "#FF3E1C",
        "default-text": "#F1F3F5",
        "blue-accent": "#AEDFF7",
        "blue-accent-hover": "#009FF7",

        // Light Blue: #AEDFF7
        // Light Yellow: #FFF9AE
        // Light Pink: #FFC1E3
        // Light Green: #AEFFD8
        // Light Red: #FFAEB1
      }
    },
  },
  plugins: [],
}
