/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        domeDark: { 
          DEFAULT: '#121212', 
          100: '#1a1a1a', 
          200: '#242424', 
          300: '#2e2e2e', 
          400: '#383838', 
          500: '#424242', 
          600: '#4c4c4c', 
          700: '#565656', 
          800: '#606060', 
          900: '#6a6a6a',
        }, 
      },
      boxShadow: {
        glow: '0px 0px 10px 0px #475569',
      },
      screens: {
        zs: '280px',
        xs: '480px',         // Extra small devices
        '3xl': '1920px',     // Ultra-wide monitors
      },
      fontFamily: {
        anton: ['"Anton"', 'serif'],
        roboto: ['"Roboto"', 'serif'],
        oswald: ['"Oswald"', 'serif'],
        aquafina: ['"Aguafina Script"', 'serif'],
        rubik: ['"Rubik Distressed"', 'serif'],
        playwrite: ['"Playwrite CA"', 'serif'],
        sourcecode: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
}
