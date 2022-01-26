module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}'
    ],
    options: {
      safelist: ['bg-blue-400', 'bg-red-400', 'bg-red-400']
    }
  },
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
