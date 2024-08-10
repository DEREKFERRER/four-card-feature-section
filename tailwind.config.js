/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.938rem'
      },
      colors: {
        'lightgray': 'hsl(0, 0%, 98%)',
        'Red': 'hsl(0, 78%, 62%)',
        'Cyan': 'hsl(180, 62%, 55%)',
        'Orange': 'hsl(34, 97%, 64%)',
        'Blue': 'hsl(212, 86%, 64%)',
        'GrayishBlue': 'hsl(229, 6%, 66%)',
        'VeryDarkBlue': 'hsl(234, 12%, 34%)'

      },
      fontFamily: {
        'body': ["Poppins"]
      },
      fontWeight: {
      extralight: '200',
      normal: '400',
      semibold: '600',
      }
    }
  },
  plugins: [],
}

