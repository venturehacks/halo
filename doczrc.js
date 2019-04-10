import { css } from 'docz-plugin-css';
import path from 'path';

export default {
  title: 'Halo Design System',
  typescript: true,
  // onCreateWebpackChain: (config) => {
  //   config.resolve.alias.set('~/components', path.join(__dirname, 'src', 'components'))
  // },
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
      loaderOpts: {
        includePaths: [
          path.resolve(__dirname, 'src', 'scss')
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
    }
  },
};
