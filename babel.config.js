const presets = ['babel-preset-gatsby', '@babel/preset-typescript'];

const svgoConfig = require('./svgo.config.js');

// NOTE(drew): SVG transform required for Jest.
// Please note that Gatsby does not leverage this transform.
// Gatsby uses @svgr/webpack (see gatsby-node.js)
const plugins = ['macros', ['inline-react-svg', { svgo: svgoConfig }]];

module.exports = {
  env: {
    development: {
      presets,
      plugins,
    },
    production: {
      presets,
      plugins,
    },
    test: {
      presets,
      plugins,
    },
  },
};
