const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    fill: {
      black: '#000',
      white: '#fff',
      red: '#f00'
    }
  },
  variants: {
    fill: ['responsive', 'hover'],
  },
  plugins: [],
}
