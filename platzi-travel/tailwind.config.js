module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9"
      },
      backgroundImage: {
        losangeles:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/LA.jpg?raw=true')",
        bali:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/bali.jpg?raw=true')",
        chicago:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/chicago.jpg?raw=true')",
        europe:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/europe.jpg?raw=true')",
        iceland:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/iceland.jpg?raw=true')",
        miami:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/miami.jpg?raw=true')",
        new_york:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/new_york.jpg?raw=true')",
        norway:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/norway.jpg?raw=true')",
        sanFrancisco:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sanFrancisco.jpg?raw=true')",
        sanFranciscoDesktop:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sanFranciscoDesktop.jpg?raw=true')",
        seattle:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/seattle.jpg?raw=true')",
        switzerland:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/switzerland.jpg?raw=true')",
        sydney:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sydney.jpg?raw=true')",
        yosemite:
          "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/yosemite.jpg?raw=true')"
      },
      fontFamily: {
        Montserrat: ["Montserrat"]
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ]
};
