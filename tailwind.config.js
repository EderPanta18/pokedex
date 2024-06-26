/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fire: '#ff7402',
        grass: '#9bcc50',
        steel: '#9eb7b8',
        water: '#4592c4',
        psychic: '#f366b9',
        ground: '#ab9842',
        ice: '#51c4e7',
        flying: '#3dc7ef',
        ghost: '#4d5b64',
        normal: '#a4acaf',
        poison: '#7e0058',
        rock: '#a38c21',
        fighting: '#d56723',
        dark: '#707070',
        bug: '#729f3f',
        dragon: '	#7b3fff',
        electric: '#bba909',
        fairy: '#fdb9e9',
        shadow: '#7b62a3',
        unknow: '#757575',
      },
    },
  },
  plugins: [],
}

