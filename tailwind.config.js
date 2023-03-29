// const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'branco': '#E1E1E1',
        'cinza': '#B4B4B4',
        'branco-semop': '#999999',
        'azul-imprensa': '#002C5A'
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}

