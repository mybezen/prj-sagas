/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "16px",
        center: true,
      },
      colors: {
        'dark-gr': '#05411A',
        'lime-gr': '#439842',
        'lune-blue' : '#6EA4EC',
        'gr-blue' : '#347991',
        'gd-db' : '#40284B',
        'gd-lb' : '#3E76C5',
        'sky-bl' : '#5F98E3',
        'dr-bl' : '#34547D',
        
      }
    },
  },
  plugins: [],
};
