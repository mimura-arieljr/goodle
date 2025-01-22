/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,ts}'
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'blue': {
        100: '#79CBF3',
        150: '#1D2433',
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
      spin: 'spin 1s linear infinite',
    },
  },
  plugins: [],
}