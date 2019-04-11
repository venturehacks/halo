import { css } from 'docz-plugin-css';
import path from 'path';
import merge from 'webpack-merge';

// const customWebpackConfig = {
//   resolve: {
//     alias: {
//       '~/components': path.join(__dirname, 'src', 'components'),
//     }
//   }
// };

export default {
  title: 'Halo Design System',
  typescript: true,
  onCreateWebpackChain: (config) => {
    if (config.resolve.alias.set) {
      config.resolve.alias.set('~/components', path.join(__dirname, 'src', 'components'));
    }
  },
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
