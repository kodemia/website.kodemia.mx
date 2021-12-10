const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  prefix: 'brand-',
  theme: {
    extend: {
      screens: {
        mob: '320px', // Work around to deal with bulma spacing utilities TODO: remove when removing bulma
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },
      animation: {
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
          trasparent: 'rgba(24, 24, 24, 0.85)'
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
        mini: '10px',
        '8dot5xl': '7rem'
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
      },
      lineHeight: {
        h1: '1.07'
      },
      letterSpacing: {
        'spaced': '.2em',
        'even-wider': '.4em',
      },
      height: {
        '85vh': '85vh',
        '500px': '500px',
        '700px': '700px',
        '800px': '800px'
      },
      minHeight: {
        mini: '16px',
        'sm-kd': '465px',
        430: '430px'
      },
      minWidth: {
        'sm-kd': '220px',
        270: '270px',
        300: '300px',
        320: '320px',
        420: '420px',
      },
      maxWidth: {
        'sm-kd': '220px',
        1086: '1086px',
        420: '420px'
      },
      maxHeight: {
        '500px': '500px',
        '600px': '600px',
        '700px': '700px',
        '80vh': '80vh'
      },
      webkitScrollbar: {
        width: '6px'
      },
      backgroundImage: {
        'events': "url('https://cdn.kodemia.mx/images/eventos/eventos-desktop.jpg')"
      }
    }
  }
}
