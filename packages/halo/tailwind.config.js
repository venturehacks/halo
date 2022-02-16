const path = require('path');

/* eslint-disable sort-keys-fix/sort-keys-fix */

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
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        900: '#000649',
        800: '#001366',
        700: '#0029b0',
        600: '#0059de',
        500: '#0f6fff',
        400: '#268bff',
        300: '#85beff',
        200: '#dde9f8',
        100: '#f2f8ff',
      },
      dark: {
        brand: '#0a6cff',
        aaaa: '#050c26',
        aaa: '#525769',
        aa: '#717584',
        a: '#9194a0',
        link: '#0a6cff',
        success: '#008562',
        warning: '#ac6600',
        error: '#cc033e',
      },
      green: {
        900: '#003520',
        800: '#004328',
        700: '#005a37',
        600: '#008953',
        500: '#009c5e',
        400: '#00a880',
        300: '#00cc96',
        200: '#b7ecde',
        100: '#e1faf3',
      },
      light: {
        brand: '#1a75ff',
        aaaa: '#fff',
        aaa: '#9b9da8',
        aa: '#777b89',
        a: '#5a5e70',
        link: '#1a75ff',
        success: '#009c5e',
        warning: '#c56e09',
        error: '#ee2531',
      },
      orange: {
        900: '#4e2400',
        800: '#914404',
        700: '#b35a04',
        600: '#c56e09',
        500: '#cb7d0e',
        400: '#f2a73d',
        300: '#e9b44f',
        200: '#fce79b',
        100: '#fff9e7',
      },
      purple: {
        900: '#220061',
        800: '#311094',
        700: '#4039a8',
        600: '#5646be',
        500: '#7956bf',
        400: '#9875de',
        300: '#b99ae9',
        200: '#dbc0f8',
        100: '#f8f1ff',
      },
      red: {
        900: '#4d001d',
        800: '#a00038',
        700: '#cc033e',
        600: '#e9304b',
        500: '#f2555f',
        400: '#f56671',
        300: '#fb868e',
        200: '#ffdce0',
        100: '#fff1f3',
      },
      slate: {
        900: '#050c26',
        800: '#162040',
        700: '#385075',
        600: '#576f92',
        500: '#7b91b1',
        400: '#acbdd5',
        300: '#d2d9e5',
        200: '#e4e7f0',
        100: '#f2f4f7',
      },
      white: {
        DEFAULT: '#fff',
      },
    },

    extend: {
      lineHeight: {
        'extra-tight': '0.75',
      },
      minWidth: {
        '3': '12px',
        '4': '16px',
        '6': '24px',
      },
      width: {
        fit: 'fit-content',
      },
      maxWidth: {
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '30%',
        '50': '50%',
        '60': '50%',
        '70': '50%',
        '80': '80%',
        '90': '90%',
        '2xs': '10rem',
        '3xs': '5rem',
      },
    },
    fontSize: {
      '2xl': ['32px', '1.125'],
      '2xs': ['11px', '1.45'],
      '3xl': ['36px', '1.11'],
      '3xs': ['10px', '1.5'],
      '4xl': ['40px', '1.05'],
      '4xs': ['8px', '1.5'],
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
      0.75: '3px',
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
      handset: '719px',
      sm: '719px',

      md: '720px',
      tablet: '720px',

      desktop: '1136px',
      lg: '1136px',

      widescreen: '1440px',
      xl: '1440px',

      superwidescreen: '1800px',
      xxl: '1800px',
    },

    boxShadow: {
      DEFAULT:
        '0 2px 6px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.04)',
      sm: '0 2px 6px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.04)',
      md:
        '2px 5px 8px rgba(3, 17, 38, 0.1071), 0 0 1px 0 rgba(0, 12, 32, 0.04)',
      lg: '2px 8px 16px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.02)',
      xl:
        '4px 12px 20px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.02)',
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
    extend: {
      margin: ['last'],
    },
  },
};

// https://typed.tw/
// console.log(JSON.stringify(config, null, 2));
