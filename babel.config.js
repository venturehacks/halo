/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  env: {
    development: {
      presets: ['babel-preset-gatsby'],
    },
    production: {
      presets: ['babel-preset-gatsby'],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [
        'dynamic-import-node',
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
  },
};
