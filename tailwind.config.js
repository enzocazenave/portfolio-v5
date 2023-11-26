/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        primary: 'color(display-p3 0.125 0.125 0.125)',
        secondary: 'color(display-p3 0.392 0.392 0.392)',
        terciary: '#8d8d8d',
        primaryDark: '#fff',
        secondaryDark: '#b4b4b4',
        terciaryDark: '#6e6e6e'
      },
      backgroundColor: {
        primary: 'color(display-p3 0.125 0.125 0.125)',
        secondary: 'color(display-p3 0.392 0.392 0.392)',
        terciary: '#8d8d8d',
        primaryDark: '#fff',
        secondaryDark: '#b4b4b4',
        terciaryDark: '#6e6e6e'
      },
      borderColor: {
        primary: 'color(display-p3 0.125 0.125 0.125)',
        secondary: 'color(display-p3 0.392 0.392 0.392)',
        terciary: '#8d8d8d',
        primaryDark: '#fff',
        secondaryDark: '#b4b4b4',
        terciaryDark: '#6e6e6e'
      },
      fontFamily: {
        sans: ['Poppins, sans-serif']
      },
      screens: {
        'xxs': '430px',
        'xs': '475px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  darkMode: 'class',
  plugins: []
}