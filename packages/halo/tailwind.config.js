/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  corePlugins: {
    // TODO(drew): use tailwind's preflight reset
    // https://venturehacks.atlassian.net/browse/LEV-1322
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
  content: [
    path.join(__dirname, 'src/**/*.{tsx,jsx,js,mdx}'),
    path.join(__dirname, 'dist/**/*.esm.js'),
    path.join(__dirname, '../docs/src/gatsby-theme-docz/**/*.{tsx,jsx,js,mdx}'),
  ],
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
      gtmblue: {
        // 900: '', // no 900 yet
        800: '#01134B',
        700: '#052077',
        600: '#062AA0',
        500: '#143FCD',
        400: '#3A45D4',
        300: '#6670F5',
        200: '#B0B5FD',
        100: '#EAEBFF',
      },

      dark: {
        brand: '#143fcd',
        aaaa: '#050c26',
        aaa: '#525769',
        aa: '#717584',
        a: '#9194a0',
        link: '#143fcd',
        success: '#0c7134',
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
      gtmgreen: {
        // 900: '', // no 900 yet
        800: '#002911',
        700: '#00431B',
        600: '#005A24',
        500: '#0C7134',
        400: '#229651',
        300: '#67CC90',
        200: '#B4ECCA',
        100: '#E0F9EA',
      },
      light: {
        aaaa: '#fff',
        aaa: '#9b9da8',
        aa: '#777b89',
        a: '#5a5e70',
        link: '#3a45d4',
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
      gtmorange: {
        // 900: '', // no 900 yet
        800: '#790700',
        700: '#A82901',
        600: '#D3450B',
        500: '#F0591C',
        400: '#EF7B46',
        300: '#FFAA83',
        200: '#FFD3BF',
        100: '#FFEDE5',
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
      gtmpurple: {
        800: '#38014b',
        700: '#571770',
        600: '#73338b',
        500: '#aa61ba',
        400: '#c692ca',
        300: '#DDBCDB',
        200: '#f0daef',
        100: '#FAEDFF',
      },
      gtmpink: {
        // 900: '', // no 900 yet
        800: '#80112C',
        700: '#AB2344',
        600: '#D44266',
        500: '#F47C9A',
        400: '#F595A5',
        300: '#FFC1CC',
        200: '#FFDEE3',
        100: '#FFF1F3',
      },
      gtmyellow: {
        // 900: '', // no 900 yet
        800: '#9F5600',
        700: '#CE7C00',
        600: '#EAA903',
        500: '#F8BE14',
        400: '#F4C63D',
        300: '#FEDD7C',
        200: '#FFEBAF',
        100: '#FFF5D8',
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
      gray: {
        // 900: '', // no 900 yet
        800: '#616161',
        700: '#757575',
        600: '#9E9E9E',
        500: '#BDBDBD',
        400: '#E0E0E0',
        300: '#EEEEEE',
        200: '#F5F5F5',
        100: '#FAFAFA',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#0E1111',
      },
    },
    fontSize: {
      '2xs': ['11px', '18px'], // (deprecated legacy nano)
      'xs': ['12px', '18px'], // (deprecated legacy micro)
      'sm': ['14px', '20px'], // Mini
      'md': ['16px', '24px'], // Body / Subsection
      'lg': ['20px', '24px'], // Section
      'xl': ['24px', '30px'], // Page
      '2xl': ['36px', '40px'], // Display
      '3xl': ['48px', '52px'], // Blog Article
      '4xl': ['56px', '64px'], // Hero Heading
      '5xl': ['64px', '72px'], // Hero Heading Plus
    },
    fontFamily: {
      sans: '"Arbeit", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      // new brand fonts
      founders: ['"Founders Grotesk"', 'sans-serif'],
      arbeit: ['Arbeit', 'sans-serif'],
      galano: ['"Galano Classic"', 'sans-serif'],
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
    screens: {
      handset: '719px',
      sm: '719px',

      md: '720px',
      tablet: '720px',

      lg: '1136px',
      desktop: '1136px',

      xl: '1440px',
      widescreen: '1440px',

      xxl: '1800px',
      superwidescreen: '1800px',
    },
    borderRadius: {
      'none': '0px',
      'sm': '2px',
      'DEFAULT': '4px',
      'md': '4px',
      'lg': '8px',
      'xl': '12px',
      '2xl': '16px',
      '3xl': '24px',
      'full': '9999px',
    },

    boxShadow: {
      DEFAULT:
        '0 2px 6px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.04)',
      sm: '0 2px 6px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.04)',
      md: '2px 5px 8px rgba(3, 17, 38, 0.1071), 0 0 1px 0 rgba(0, 12, 32, 0.04)',
      lg: '2px 8px 16px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.02)',
      xl: '4px 12px 20px rgba(3, 17, 38, 0.1071), 0 0 1px rgba(0, 12, 32, 0.02)',
    },

    // keys within `extend` inherit from default theme
    // keys outside `extend` replace the default theme
    extend: {
      height: {
        18: '4.5rem', // used by Avatar size lg
      },
      minWidth: {
        3: '12px',
        4: '16px',
        6: '24px',
      },
      width: {
        fit: 'fit-content',
        100: '25rem', // TODO(drew): imported from TFE during merge
        18: '4.5rem', // used by Avatar size lg
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
      transitionDuration: {
        250: '250ms',
      },
      zIndex: {
        1: 1,
        hover: 2,
        tooltip: 10,
        menu: 100,
        overlay: 200,
        postoverlay: 300,
        modal: 400,
        postmodal: 500,
        toast: 1000,
        sky: 10000,
        space: 20000,
        max: 2147483647,
      },
    },
  },
};
