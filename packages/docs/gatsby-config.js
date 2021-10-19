const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {},
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '~/components': path.resolve(__dirname, 'src', 'components'),
          '~/lib': path.resolve(__dirname, 'src', 'lib'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        sassRuleModulesTest: /\.scss$/,
        sassRuleTest: /\.global\.scss$/,
        includePaths: ['scss', 'node_modules'],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
};