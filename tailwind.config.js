// const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        logo: '#804E9F',
        logoWhite: '#f4f2f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //https://tailwindcss.com/docs/plugins#official-plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
