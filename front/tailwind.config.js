/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: '#0f97a2',
        'primary-light': '#a9e7f5',
        'primary-dark': '#3f869e',
        secondary: '#fdd98a',
        font: {
          primary: '#d8d8d8',
          muted: 'rgba(216,216,216,0.66)',
        },
        divider: 'rgba(255, 255, 255, 0.33)',
      },
      backgroundColor: {
        // Define your custom background colors here
        default: '#141414',
        paper: '#1c2029',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  },
  plugins: [],
}

