/* eslint-disable sort-keys-fix/sort-keys-fix */
const presets = ['babel-preset-gatsby', '@babel/preset-typescript'];

const svgoConfig = require('./svgo.config.js');

const plugins = [['inline-react-svg', { svgo: svgoConfig }]];

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
