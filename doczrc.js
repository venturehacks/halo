import { css } from 'docz-plugin-css';
import path from 'path';

export default {
  title: 'Halo Design System',
  typescript: true,
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
    primary: '#01BAEF',
  },
};
