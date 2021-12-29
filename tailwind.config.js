module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
      extend: {
        animation: {
          blob: "blob 4s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.2)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.8)",
            },
            "100%": {
              transform: "translate(0px, 0px) scale(1)",
            },
          }
        }
      },
      colors: {
          'blue': '#0ea5e9',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'dark': '#1e2936',
          'gray-dark': '#273444',
          'blue-dark': '#0f172a',
          'gray': '#76889d',
          'gray-light': '#d3dce6',
          'white': '#ffffff'
        },
      fontFamily: {
          'Lato': ['Lato, sans-serif']
      },
      container: {
          padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
          },
      },
  },
  plugins: [],
}