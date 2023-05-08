/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      spacing:{
        '0.1': '0.063rem',
      },
      backgroundImage: theme =>({
        'mobile-app': 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      }),
      colors:{
        'brand-color': '#4C3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300'
      }
    },
    variants: {
      extend: {
      },
    },
  },
  plugins: [],
}

