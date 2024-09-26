/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    // 'sm': '320px',
    //   // => @media (min-width: 320px) {...}
   'md': '640px',
    //   // => @media (min-width: 640px) { ... }

    'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   //'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    },
    colors: {
      white: '#FFFFFF',
      red: '#DC2626',
      gray: '#827F7F',
      blue: {
        light: '#11CBF5',

        dark: '#183462',
        deep: '#00132B'
      },
      green: {
        light: '#5ECA6B',
        dark: '#38AF48',
        deep: '#205B27'
      },
      orange: {
        light: '#F08847',
        dark: '#EB6924',
        deep: '#92301A'
      }
    },
    extend: {},
  },
  plugins: [],
}