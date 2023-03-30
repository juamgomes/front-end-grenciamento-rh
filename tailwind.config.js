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
        'azul-imprensa': '#002C5A',
        'verde-vivido': '#2CA54D',
        'vermelho': '#CE2828',
        'fundo-cinza': '#C8C8C8',
        'vermelho-imprensa': '#ED373D',
        'fundo-branco': '#D9D9D9'
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}

