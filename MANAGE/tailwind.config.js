/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}, ", "index.html", "index123.html"],
  theme: {
    extend: {
      colors:{
        brightRed: 'hsl(12,88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12,88%, 69%)',
        darkblue: 'hsl(228,39%,23%)',
        darkGrayishBlue: 'hsl(227,12%, 61%)',
        VeryDarkBlue: 'hsl(233,12%, 13%)',
        VeryPaleRed: 'hsl(13,100%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        red: 'hsl(0, 100%, 50%)',
        blue:'hsl(232, 88%, 48%)',
        black:'hsl(0, 0%, 0%)'
      } ,
    },
  },
  plugins: [],
}

