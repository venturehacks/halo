import { css } from 'docz-plugin-css'

export default {
  title: 'Halo Design System',
  typescript: true,
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      }
    })
  ],
  themeConfig: {
    primary: '#01BAEF'
  }
}
