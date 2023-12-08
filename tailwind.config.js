module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
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
      animation: {
        headerBackground: "headerBackground 30s infinite"
      },
      keyframes: {
        headerBackground: {
          // "0%": {
          //   transform: "scale(1.5) perspective(1000px) rotateX(40deg) rotateY(-160deg) rotateZ(40deg);"
          // },
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg) perspective(1000)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(0.9) rotate(5deg) perspective(2000px)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(1.1) rotate(3deg)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0) perspective(1000)"
          }
        }
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
      'xmas-green': '#899c8c',
      'xmas-red': '#D93830',
    },
    fill: theme => theme('colors'),
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
      brightness: ['hover'],
    }
  },
  plugins: [],
}
