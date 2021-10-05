import path from 'path';
import merge from 'webpack-merge';

export default {
  debug: true,
  notUseSpecifiers: true,
  src: path.join(__dirname, 'src'),
  title: 'Halo Design System',
  typescript: true,
  repository: 'https://github.com/venturehacks/halo',
  ignore: [
    'node_modules',
    'node_modules/**/*',
    'server',
    'pages',
    '.next',
    '.cache',
    'coverage',
  ],
  docgenConfig: {
    propFilter: prop => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
    searchPatterns: [
      '**/*.{tsx}',
      'src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!**/doczrc.js',
      '!**/.next',
      '!**/.cache',
      '!**/public',
      '!**/dist',
      '!**/coverage',
    ],
  },
  filterComponents: files =>
    files.filter(filepath =>
      /.*components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath),
    ),
  themeConfig: {
    primary: '#0F6FFF',
    showPlaygroundEditor: true,
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  menu: [
    'Welcome',
    {
      name: 'Guides',
      menu: ['Typography', 'Color'],
    },
    {
      name: 'Core',
    },
    {
      name: 'Structure',
      menu: ['Box', 'Grid', 'Cell'],
    },
    {
      name: 'Form',
      menu: [
        'Label',
        'FieldErrorMessage',
        'RawInput',
        'RawCheckbox',
        'RawRadio',
        'RawSelect',
        'RawTextarea',
      ],
    },
    {
      name: 'Sass',
      menu: ['Variables', 'Mixins', 'Functions', 'Breakpoints'],
    },
  ],
};
