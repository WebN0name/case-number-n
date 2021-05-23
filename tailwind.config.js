module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

        'header': "url('/img/Criminal-Background-.jpg')",
       })
    },
    fontFamily: {
      roboto: ["Roboto"],
      inter: ["Inter"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
