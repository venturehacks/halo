const path = require('path');
const rootDirectory = path.resolve(__dirname, '../..');
const haloDirectory = path.join(rootDirectory, 'packages/halo');

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
          '~/components': path.join(haloDirectory, 'src', 'components'),
          '~/lib': path.join(haloDirectory, 'src', 'lib'),
          'gatsby-theme-docz': path.join(
            haloDirectory,
            'src',
            'gatsby-theme-docz',
          ),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        sassRuleModulesTest: /\.scss$/,
        sassRuleTest: /\.global\.scss$/,
        includePaths: [
          path.join(haloDirectory, 'scss'),
          path.join(haloDirectory, 'node_modules'),
          path.join(rootDirectory, 'node_modules'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
};
