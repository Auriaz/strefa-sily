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
      screens: {
        "xs": '0',
        "sm": '480px',
        "md": '960px',
        "lg": '1200px',
        "xl": '1440px',
      },
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
          'orange': '#ff5722',
          'green': '#62db68',
          'yellow': '#ffc82c',
          'dark': '#1e2936',
          'blue-dark': '#0f172a',
          'gray': '#76889d',
          'gray-dark': '#273444',
          'gray-light': '#d3dce6',
          'white': '#ffffff',
          'amber': '#ffc107',
          'cyan': '#00bcd4',
          'indigo': '#3f51b5',
        },
      fontFamily: {
          'Lato': ['Lato, sans-serif']
      },
      container: {
        padding: 0,
        screens: {
          "xs": '0',
          "sm": '480px',
          "md": '960px',
          "lg": '1200px',
          "xl": '1440px',
        },
      },
  },
  plugins: [],
}