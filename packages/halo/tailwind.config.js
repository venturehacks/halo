const path = require('path');

/* eslint-disable sort-keys-fix/sort-keys-fix */
const colors = {
  // dark text on light background
  'text-dark--aaaa': '#050c26',
  'text-dark--aaa': '#525769',
  'text-dark--aa': '#717584',
  'text-dark--a': '#9194a0',
  'text-dark--link': '#0a6cff',
  'text-dark--success': '#008562',
  'text-dark--warning': '#ac6600',
  'text-dark--error': '#cc033e',

  // light text on dark background
  'text-light--aaaa': '#fff',
  'text-light--aaa': '#9b9da8',
  'text-light--aa': '#777b89',
  'text-light--a': '#5a5e70',
  'text-light--link': '#1a75ff',
  'text-light--success': '#009c5e',
  'text-light--warning': '#c56e09',
  'text-light--error': '#ee2531',

  // SPECTRUM
  // slate
  'slate--900': '#050c26',
  'slate--800': '#162040',
  'slate--700': '#385075',
  'slate--600': '#576f92',
  'slate--500': '#7b91b1',
  'slate--400': '#acbdd5',
  'slate--300': '#d2d9e5',
  'slate--200': '#e4e7f0',
  'slate--100': '#f2f4f7',

  // blue
  'blue--900': '#000649',
  'blue--800': '#001366',
  'blue--700': '#0029b0',
  'blue--600': '#0059de',
  'blue--500': '#0f6fff',
  'blue--400': '#268bff',
  'blue--300': '#85beff',
  'blue--200': '#dde9f8',
  'blue--100': '#f2f8ff',

  // green
  'green--900': '#003520',
  'green--800': '#004328',
  'green--700': '#005a37',
  'green--600': '#008953',
  'green--500': '#009c5e',
  'green--400': '#00a880',
  'green--300': '#00cc96',
  'green--200': '#b7ecde',
  'green--100': '#e1faf3',

  // red
  'red--900': '#4d001d',
  'red--800': '#a00038',
  'red--700': '#cc033e',
  'red--600': '#e9304b',
  'red--500': '#f2555f',
  'red--400': '#f56671',
  'red--300': '#fb868e',
  'red--200': '#ffdce0',
  'red--100': '#fff1f3',

  // purple
  'purple--900': '#220061',
  'purple--800': '#311094',
  'purple--700': '#4039a8',
  'purple--600': '#5646be',
  'purple--500': '#7956bf',
  'purple--400': '#9875de',
  'purple--300': '#b99ae9',
  'purple--200': '#dbc0f8',
  'purple--100': '#f8f1ff',

  // orange
  'orange--900': '#4e2400',
  'orange--800': '#914404',
  'orange--700': '#b35a04',
  'orange--600': '#c56e09',
  'orange--500': '#cb7d0e',
  'orange--400': '#f2a73d',
  'orange--300': '#e9b44f',
  'orange--200': '#fce79b',
  'orange--100': '#fff9e7',
};

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  // mode: 'jit',
  // or 'media' or 'class'
  corePlugins: {
    // we have our own style reset
    // could move to tailwinds but would require a full style audit :X
    preflight: true,
    // safelist
    margin: true,
    padding: true,
    textAlign: true,
    backgroundColor: true,
    flex: true,
    justifyContent: true,
    alignItems: true,
  },
  darkMode: false,
  plugins: [],
  purge: {
    content: [
      path.join(__dirname, 'src/**/*.{tsx,jsx,mdx}'),
      path.join(__dirname, 'dist/**/*.mjs'),
    ],
    options: {
      keyframes: true,
    },
  },
  theme: {
    colors: {
      blue: {
        100: colors['blue--100'],
        200: colors['blue--200'],
        300: colors['blue--300'],
        400: colors['blue--400'],
        500: colors['blue--500'],
        600: colors['blue--600'],
        700: colors['blue--700'],
        800: colors['blue--800'],
        900: colors['blue--900'],
      },
      current: 'currentColor',
      dark: {
        a: colors['text-dark--a'],
        aa: colors['text-dark--aa'],
        aaa: colors['text-dark--aaa'],
        aaaa: colors['text-dark--aaaa'],
        error: colors['text-dark--error'],
        link: colors['text-dark--link'],
        success: colors['text-dark--success'],
        warning: colors['text-dark--warning'],
      },
      green: {
        100: colors['green--100'],
        200: colors['green--200'],
        300: colors['green--300'],
        400: colors['green--400'],
        500: colors['green--500'],
        600: colors['green--600'],
        700: colors['green--700'],
        800: colors['green--800'],
        900: colors['green--900'],
      },
      light: {
        a: colors['text-light--a'],
        aa: colors['text-light--aa'],
        aaa: colors['text-light--aaa'],
        aaaa: colors['text-light--aaaa'],
        error: colors['text-light--error'],
        link: colors['text-light--link'],
        success: colors['text-light--success'],
        warning: colors['text-light--warning'],
      },
      orange: {
        100: colors['orange--100'],
        200: colors['orange--200'],
        300: colors['orange--300'],
        400: colors['orange--400'],
        500: colors['orange--500'],
        600: colors['orange--600'],
        700: colors['orange--700'],
        800: colors['orange--800'],
        900: colors['orange--900'],
      },
      purple: {
        100: colors['purple--100'],
        200: colors['purple--200'],
        300: colors['purple--300'],
        400: colors['purple--400'],
        500: colors['purple--500'],
        600: colors['purple--600'],
        700: colors['purple--700'],
        800: colors['purple--800'],
        900: colors['purple--900'],
      },
      red: {
        100: colors['red--100'],
        200: colors['red--200'],
        300: colors['red--300'],
        400: colors['red--400'],
        500: colors['red--500'],
        600: colors['red--600'],
        700: colors['red--700'],
        800: colors['red--800'],
        900: colors['red--900'],
      },
      slate: {
        100: colors['slate--100'],
        200: colors['slate--200'],
        300: colors['slate--300'],
        400: colors['slate--400'],
        500: colors['slate--500'],
        600: colors['slate--600'],
        700: colors['slate--700'],
        800: colors['slate--800'],
        900: colors['slate--900'],
      },
      transparent: 'transparent',
      white: {
        DEFAULT: '#FFF',
      },
    },

    extend: {
      width: {
        fit: 'fit-content',
      },
    },

    fontSize: {
      '2xl': ['32px', '1.125'],
      '2xs': ['11px', '1.45'],
      '3xl': ['36px', '1.11'],
      '4xl': ['40px', '1.05'],
      '5xl': ['48px', '1.06'],
      '6xl': ['56px', '1.07'],
      lg: ['20px', '1.4'],
      md: ['16px', '1.5'],
      sm: ['14px', '1.5'],
      xl: ['24px', '1.25'],
      xs: ['12px', '1.67'],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    // TODO would be nice if this was accessible via halo
    screens: {
      desktop: '1136px',
      handset: '719px',

      lg: '1136px',
      md: '720px',

      sm: '719px',
      superwidescreen: '1800px',

      tablet: '720px',
      widescreen: '1440px',

      xl: '1440px',
      xxl: '1800px',
    },
    zIndex: {
      hover: 2,
      max: 2147483647,
      menu: 100,
      modal: 400,
      overlay: 200,
      postmodal: 500,
      postoverlay: 300,
      sky: 10000,
      space: 20000,
      toast: 1000,
      tooltip: 10,
    },
  },
  variants: {
    extend: {},
  },
};

// https://typed.tw/
// console.log(JSON.stringify(config, null, 2));
