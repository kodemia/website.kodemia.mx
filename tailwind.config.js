const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor alternate linear 0.8s infinite'
      },
      backgroundImage: {
        'events-lg': "url('https://cdn.kodemia.mx/images/eventos/eventos-desktop.jpg')",
        'events-sm': "url('https://cdn.kodemia.mx/images/eventos/eventos-mobile.jpg')",
        'home-financing-lg': "url('https://cdn.kodemia.mx/images/home/apoyo-kodemia.jpg')",
        'home-financing-md': "url('https://cdn.kodemia.mx/images/home/apoyo-tablet.jpg')",
        'home-financing-sm': "url('https://cdn.kodemia.mx/images/home/apoyo-mobile.jpg')",
        'companies-collaborate-lg': "url('https://cdn.kodemia.mx/images/companies/colabora-con-kodemia-desktop.jpg')",
        'companies-collaborate-md': "url('https://cdn.kodemia.mx/images/companies/colabora-con-kodemia-tablet.jpg')",
        'companies-collaborate-sm': "url('https://cdn.kodemia.mx/images/companies/colabora-con-kodemia-mobile.jpg')"
      },
      borderRadius: {
        small: '10px',
        medium: '20px',
        wide: '30px'
      },
      colors: {
        'brand-black': {
          DEFAULT: '#181818',
          dark: '#0E0E0E',
          light: '#343434',
        },
        'brand-complementary': {
          DEFAULT: '#FBFBFB' 
        },
        'brand-error': {
          DEFAULT: '#E95249'
        },
        'brand-gray': {
          DEFAULT: '#737373',
          dark: '#302F2B',
          light: '#999999'
        },
        'brand-primary': {
          DEFAULT: '#00FFFF',
          dark: '#07BABA'
        },
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
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
