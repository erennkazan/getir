/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': '#4C3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      }),
      gradientColorStops: theme => ({
        'brand-color': '#4C3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      }),
      textColor: theme => ({
        'brand-color': '#4C3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      })
    },
    variants: {
      extend: {
      },
    },
  },
  plugins: [],
}

