module.exports = {
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