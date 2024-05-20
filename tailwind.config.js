module.exports = {
  purge: [
    './html/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "yekanBakh": "yekan-bakh"
      },
      colors: {
        primary: {
          600: "#E2C374"
        },
        secondary: {
          200: "#535353",
          300: "#454545",
          400: "#363436",
          700: '#242424',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}