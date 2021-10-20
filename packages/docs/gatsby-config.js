const path = require('path');
const rootDirectory = path.resolve(__dirname, '../..');
const haloDirectory = path.resolve(rootDirectory, 'packages/halo');

const sassIncludePaths = [
  'scss',
  'node_modules',
  path.resolve(haloDirectory, 'scss'),
  path.resolve(haloDirectory, 'node_modules'),
  path.resolve(rootDirectory, 'node_modules'),
  path.resolve(__dirname, 'node_modules'),
];

console.log({
  rootDirectory,
  haloDirectory,
  sassIncludePaths,
});

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
          // '~/components': path.join(__dirname, 'src', 'components'),
          // '~/lib': path.join(__dirname, 'src', 'lib'),
          '~/components': path.join(haloDirectory, 'src', 'components'),
          '~/lib': path.join(haloDirectory, 'src', 'lib'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        sassRuleModulesTest: /\.scss$/,
        sassRuleTest: /\.global\.scss$/,
        includePaths: sassIncludePaths,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
};
