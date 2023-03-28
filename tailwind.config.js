/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#96f2de",
        
"secondary": "#21c632",
        
"accent": "#9ddd61",
        
"neutral": "#2B1B2C",
        
"base-100": "#3C3A4A",
        
"info": "#B0BAE8",
        
"success": "#19D297",
        
"warning": "#DAA216",
        
"error": "#E36385",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

