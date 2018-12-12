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
  },

  /*
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", 'typings-for-css-modules-loader?modules&sass']
    })

    return config
  }
  */
}
