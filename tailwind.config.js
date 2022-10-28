/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        'blue': '#1fb6ff',
        'purpleish': '#B182FF',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'yellowish': '#EBFF00',
        'jellow': '#FFFF45',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'hred': '#E34C26',
        'cblue': '#2965F1',
        'pyblue': '#306998',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
          '11': '2.75rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        gap: {
          '11': '2.75rem',
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    variants: {
      extend : {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus']
      },
    },
    plugins: [

    ],
  }
}
