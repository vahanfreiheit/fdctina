module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./themes/freiheit-com/layouts/**/*.html",
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    corePlugins: {
      lineHeight: false,
    },
    extend: {
      fontSize: {
        'label': ['14px', {
          lineHeight: '22px',
          letterSpacing: '0.05em',
          fontFamily: 'NB-International-Pro',
        }],
        'navigation': ['16px', {
          lineHeight: '20.8px',
          fontFamily: 'NB-International-Pro',
        }],
        // body text
        'body-xs': ['12px', {
          lineHeight: '15.6px',
          fontFamily: 'Work Sans',
        }],
        'body-sm': ['12px', {
          lineHeight: '15.6px',
          fontFamily: 'Work Sans',
        }],
        'body-md': ['16px', {
          lineHeight: '20.8px',
          fontFamily: 'Work Sans',
        }],
        'body-lg': ['20px', {
          lineHeight: '26px',
          fontFamily: 'Work Sans',
        }],
        'body-xl': ['28px', {
          lineHeight: '36.4px',
          fontFamily: 'Work Sans',
        }],
        'body-xxl': ['36px', {
          lineHeight: '46.8px',
          fontFamily: 'Work Sans',
        }],
        // heading text
        'head-xs': ['16px', {
          lineHeight: '17.6px',
          fontFamily: 'Neue-Machina',
        }],
        'head-sm': ['20px', {
          lineHeight: '22px',
          fontFamily: 'Neue-Machina',
        }],
        'head-md': ['28px', {
          lineHeight: '30.8px',
          fontFamily: 'Neue-Machina',
        }],
        'head-lg': ['36px', {
          lineHeight: '39.6px',
          fontFamily: 'Neue-Machina',
        }],
        'head-xl': ['64px', {
          lineHeight: '70.4px',
          fontFamily: 'Neue-Machina',
        }],
        'head-xxl': ['84px', {
          lineHeight: '92.4px',
          fontFamily: 'Neue-Machina',
        }],
        'numbers-xs': ['4rem', {
          lineHeight: '1em',
          fontFamily: 'fdc-numbers',
        }],
        'numbers-sm': ['5rem', {
          lineHeight: '1em',
          fontFamily: 'fdc-numbers',
        }],
        'numbers-md': ['8rem', {
          lineHeight: '1em',
          fontFamily: 'fdc-numbers',
        }],
        'numbers-lg': ['11rem', {
          lineHeight: '1em',
          fontFamily: 'fdc-numbers',
        }],
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Neue-Machina', 'serif'],
      fdc: ['fdc', 'serif'],
    },
    screens: {
      'xs': '0',
      'sm': '576px', // 360
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      '3xl': '1530px',
      '4xl': '1920px',
    },
    colors: {
      'black': '#292C35',
      'light-grey': '#EAEAEA',
      'white': '#FFFFFF',
      'yellow': '#D3FF19',
      'green': '#34B255',
      'pink': '#FF19FF',
      'red': '#FF5B40',
      'pale-green': '#899C8C',
      'honeydew': '#DFEFDA',
      'alabaster': '#E6DFCA',
      'pale-purple': '#E4D1E8',
      'black-rgba': '#990000',
    },
    fill: theme => theme('colors'),
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
    }
  },
  plugins: [],
}
