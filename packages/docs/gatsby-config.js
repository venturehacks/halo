const path = require('path');
const rootDirectory = path.resolve(__dirname, '../..');
const haloDirectory = path.resolve(rootDirectory, 'packages/halo');

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
          // NOTE(drew): unsure why this is necessary, but for some reason
          // gatsby cannot find 'halo' scss source via includePaths
          halo: path.join(haloDirectory, 'scss', '_halo.scss'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassRuleModulesTest: /\.module\.scss$/,
        sassRuleTest: /\.scss$/,
        sassOptions: {
          sourceMap: true,
          includePaths: [
            'scss',
            'node_modules',
            path.resolve(haloDirectory, 'scss'),
            path.resolve(haloDirectory, 'node_modules'),
            path.resolve(rootDirectory, 'node_modules'),
            path.resolve(__dirname, 'node_modules'),
          ],
        },
        postCssPlugins: [
          require('tailwindcss')(
            path.join(haloDirectory, 'tailwind.config.js'),
          ),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
};
