const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        arrow: 'arrow ease-out linear 3s infinite',
        cursor: 'cursor alternate linear 0.8s infinite'
      },
      borderRadius: {
        card: '10px',
        'gray-card': '30px'
      },
      borderWidth: {
        'text-cursor': '3.5px'
      },
      colors: {
        'black-kd': {
          dark: '#0E0E0E',
          DEFAULT: '#181818',
          light: '#343434',
          transparent: 'rgba(24, 24, 24, 0.4)'
        },
        'cyan-kd': {
          dark: '#07BABA',
          DEFAULT: '#00FFFF'
        },
        'gray-kd': {
          dark: '#2f2f2f',
          DEFAULT: '#4E4E4E',
          light: '#828282',
          lighter: '#bdbdbd'
        },
        'green-kd': {
          dark: '#AAD64C',
          DEFAULT: '#95e3a5'
        },
        'red-kd': {
          DEFAULT: '#E95249',
          light: '#fa867f'
        },
        'violet-kd': {
          DEFAULT: '#BB2BFF'
        },
        'white-kd': {
          DEFAULT: '#FBFBFB'
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '28px',
        h4: '24px',
        h5: '20px',
        mini: '10px'
      },
      keyframes: {
        arrow: {
          '0%, 100%': {
            bottom: 'bottom-0'
          },
          '50%': {
            bottom: '-60px',
            width: '20px'
          }
        },
        cursor: {
          '0%, 100%': {
            borderBottomColor: 'transparent'
          },
          '50%': {
            borderBottomColor: 'unset'
          }
        }
      },
      lineHeight: {
        h1: '1.07'
      },
      maxWidth: {
        'sm-kd': '220px',
        content: '1086px'
      },
      minHeight: {
        mini: '16px',
        'sm-kd': '465px'
      },
      minWidth: {
        'sm-kd': '220px',
        content: '719px'
      },
      screens: {
        mob: '320px', // Work around to deal with bulma spacing utilities TODO: remove when removing bulma
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },
      webkitScrollbar: {
        width: '6px'
      }
    }
  }
}
