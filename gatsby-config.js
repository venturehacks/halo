const path = require('path');

module.exports = {
  plugins: [
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
        includePaths: [path.resolve(__dirname, 'scss')],
      },
    },
  ],
};
