/* eslint-disable sort-keys-fix/sort-keys-fix */

const presets = ['babel-preset-gatsby', '@babel/preset-typescript'];

module.exports = {
  env: {
    development: {
      presets,
    },
    production: {
      presets,
    },
    test: {
      presets,
    },
  },
};
