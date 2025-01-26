/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#040404",
        primary: "#E8E6E3",
        secondary: "#A8A095",
        link: "#3AA4FF",
      },
    },
  },
  variants: {
    extend: {},
  },
};
