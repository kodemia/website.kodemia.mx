const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor alternate linear 0.8s infinite'
      },
      borderRadius: {
        DEFAULT: '20px',
        small: '10px',
        wide: '30px'
      },
      borderWidth: {
        DEFAULT: '1px',
        thick: '2px'
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
      fontSize: {
        'brand-h1': ['40px', '1.07'],
        'brand-h1-sm': ['32px', '1.07'],
        'brand-h2': ['32px', '1.07'],
        'brand-h2-sm': ['28px', '1.07'],
        'brand-h3': ['28px', '1.2'],
        'brand-h4': ['24px', '1.4'],
        'brand-h5': ['20px', '1.4']
      },
      keyframes: {
        cursor: {
          '0%, 100%': {
            borderBottomColor: 'transparent'
          },
          '50%': {
            borderBottomColor: 'unset'
          }
        }
      }
    }
  }
}
