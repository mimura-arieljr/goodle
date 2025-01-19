/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,ts}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': {
        100: '#79CBF3',
        200: '#1E293B',
        300: '#11172C',
        500: '#0F172B',
      },
      'purple': {
        100: '#A354F1',
        200: '#613896',
        300: '#492F78',
      },
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'red': '#ff4d4f',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      anonymouspro: ["Anonymous Pro", 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    animation: {
      slidein: "slidein 1s ease 300ms",
    },
  },
  plugins: [],
}