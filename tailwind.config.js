const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        cursor: 'cursor alternate linear 0.8s infinite'
      },
      backgroundImage: {
        'events': "url('https://cdn.kodemia.mx/images/eventos/eventos-desktop.jpg')"
      },
      borderRadius: {
        DEFAULT: '20px',
        small: '10px',
        wide: '30px',
        card: '10px', // TODO: Delete
        'gray-card': '30px' // TODO: Delete
      },
      borderWidth: {
        'text-cursor': '3.5px'
      },
      colors: {
        'brand-black': {
          dark: '#0E0E0E',
          DEFAULT: '#181818',
          light: '#343434', // TODO: Delete
          trasparent: 'rgba(24, 24, 24, 0.85)' // TODO: Delete
        },
        'brand-complementary': {
          DEFAULT: '#FBFBFB'
        },
        'brand-error': {
          DEFAULT: '#E95249',
          light: '#fa867f' // TODO: Delete
        },
        'brand-gray': {
          dark: '#302F2B',
          DEFAULT: '#737373',
          light: '#999999',
          lighter: '#bdbdbd' // TODO: Delete
        },
        'brand-primary': {
          dark: '#07BABA',
          DEFAULT: '#00FFFF'
        },
        'green-kd': { // TODO: Delete
          dark: '#AAD64C',
          DEFAULT: '#95e3a5'
        },
        'violet-kd': { // TODO: Delete
          DEFAULT: '#BB2BFF'
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
      height: {
        '85vh': '85vh',
        '500px': '500px',
        '700px': '700px',
        '800px': '800px'
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
      letterSpacing: {
        'spaced': '.2em',
        'even-wider': '.4em',
      },
      lineHeight: {
        h1: '1.07'
      },
      maxHeight: {
        '500px': '500px',
        '600px': '600px',
        '700px': '700px',
        '80vh': '80vh'
      },
      maxWidth: {
        '200px': '200px',
        'sm-kd': '220px',
        1086: '1086px',
        420: '420px'
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
      screens: {
        mob: '320px', // Work around to deal with bulma spacing utilities TODO: remove when removing bulma
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },
      webkitScrollbar: {
        width: '6px'
      },
    }
  },
  variants: {
    extend: {
      background: ['disabled'],
      border: ['disabled'],
      cursor: ['disabled'],
      opacity: ['disabled']
    }
  }
}
