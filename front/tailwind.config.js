/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ajoutez vos couleurs personnalisées ici
        'custom-gray': '#323232',
        'custom-light-gray': '#EFEFEF',
        'custom-button': '#41BFB3',
      },
      fontFamily: {
        roboto: ['Roboto', 'serif'], // Ajoutez la police Roboto ici
      },
    },
    
  },
  plugins: [],
}

