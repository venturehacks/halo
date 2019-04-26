import { css } from 'docz-plugin-css';
import path from 'path';
import merge from 'webpack-merge';

export default {
  title: 'Halo Design System',
  typescript: true,
  debug: false,
  src: path.join(__dirname, 'src'),
  onCreateWebpackChain: (config) => {
    if (config.resolve.alias.set) {
      config.resolve.alias.set('~/components', path.join(__dirname, 'src', 'components'));
      config.resolve.alias.set('~/lib', path.join(__dirname, 'src', 'lib'));
    }

    // console.log(config.toString()); process.exit();
  },
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
      loaderOpts: {
        includePaths: [
          path.resolve(__dirname, 'scss')
        ]
      },
    }),
  ],
  themeConfig: {
    primary: '#0F6FFF',
    styles: {
      body: {
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      },
      playground: {
        padding: '20px',
      },
    },
    showPlaygroundEditor: true,
  },
  menu: [
    'Welcome',
    'Colors',
    {
      name: 'Structure',
      menu: ['Grid', 'Cell', 'Box']
    },
    {
      name: 'Core'
    },
  ]
};
