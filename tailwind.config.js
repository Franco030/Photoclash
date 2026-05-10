/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                pastel: {
                    pink: '#FFD1DC',
                    blue: '#AEC6CF',
                    green: '#77DD77',
                    lavender: '#B39EB5'
                }
            }
        },
    },
    plugins: [],
}