module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
    },
    production: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              corejs: 2,
              useBuiltIns: 'usage',
            },
          },
        ],
      ],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: ['dynamic-import-node'],
    },
  },
};
