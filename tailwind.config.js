const {
  colors
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fill: theme => ({
        'indigo': theme('colors.indigo.500')
      }),
      colors: {
        gray: {
          ...colors.gray,
          '100': '#f8f8f8',
        },
        teal: {
          ...colors.teal,
          '200': '#63D2F9'
        },
        blue: {
          ...colors.blue,
          '300': '#63B0F9',
          '900': '#282846',
        },
        indigo: {
          ...colors.indigo,
          '500': '#4E5EE4',
        },
      },
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      })
    },
  },
  variants: {},
  plugins: []
}