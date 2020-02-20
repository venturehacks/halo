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
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Kimbie Dark',
              // injectStyles: true,
            },
          },
        ],
      },
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
        // sassRuleTest: /\.global\.scss$/,
        sassRuleModulesTest: /\.scss$/,
        includePaths: ['scss', 'node_modules'],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        // mergeSecurityHeaders: true, // boolean to turn off the default security headers
        // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        // mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
