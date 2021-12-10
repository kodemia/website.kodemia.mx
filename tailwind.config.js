const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '20px',
        'small': '10px',
        'wide': '30px'
      },
      borderWidth: {
        DEFAULT: '1px',
        'thick': '2px'
      },
      colors: {
        'brand-black': {
          dark: '#0E0E0E',
          DEFAULT: '#181818',
          light: '#343434',
        },
        'brand-complementary': {
          DEFAULT: '#FBFBFB'
        },
        'brand-error': {
          DEFAULT: '#E95249',
          light: '#FA867F'
        },
        'brand-gray': {
          dark: '#302F2B',
          DEFAULT: '#737373',
          light: '#999999',
        },
        'brand-primary': {
          dark: '#07BABA',
          DEFAULT: '#00FFFF'
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
    }
  }
}
