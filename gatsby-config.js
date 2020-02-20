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
    'gatsby-theme-docz',
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
        // sassRuleTest: /\.global\.scss$/,
        sassRuleModulesTest: /\.scss$/,
        includePaths: ['scss', 'node_modules'],
      },
    },
  ],
};
