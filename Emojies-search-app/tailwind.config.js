/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
      },
      colors:{
        'primary':'#59B4C3',
        'secondary':'#74E291',
        'post-secondary':'#EFF396'
      }
    },
  },
  plugins: [],
}