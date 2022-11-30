/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*html"],
  theme: {
    extend:{
      fontFamily:{
        "mont": "montserrat",
        "cin":"cinzel",
        "cin-dec":"cinzel-decorative",
        "pop":"poppins",
        "jose":"josefin-sans"
      },
      colors:{
        "midnight":"rgb(25,37,55)"
      }
    } 
  },
  plugins: [],
}
