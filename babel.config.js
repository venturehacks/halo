module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: ['@babel/plugin-proposal-optional-chaining'],
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
      plugins: ['@babel/plugin-proposal-optional-chaining'],
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
