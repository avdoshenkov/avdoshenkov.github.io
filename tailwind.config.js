const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./_content/**/*.md",
    "./_includes/**/*.js"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      translate: ['group-hover'],
    }
  },
  plugins: [],
}
