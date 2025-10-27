/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
      "./index.html",
         "./src/**/*.{js,jsx,ts,tsx}",
           "./src/*/.{js,ts,jsx,tsx}",
           "./pages/**/*/.{js,ts,jsx,tsx}",
         "./components/**/*/.{js,ts,jsx,tsx}",
      
  ],
  theme: {
   
    
    extend: {},
    screens: {
      android: { 'max': '432px' }, 
      xs: '375px',     // custom extra small
      sm: '412px',     
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // custom large screen
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],


}
