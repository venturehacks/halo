/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = [
  {
    name: 'CommonJS',
    path: ['packages/halo/dist/halo.js', 'packages/halo/dist/halo.css'],
    limit: '100 kB',
  },
  {
    name: 'ES6',
    path: [
      'packages/halo/dist/halo.module.js',
      'packages/halo/dist/halo.module.css',
    ],
    limit: '100 kB',
  },
  {
    name: 'Typings',
    path: ['packages/halo/dist/typings/**/*.d.ts'],
  },
  {
    name: 'Total',
    path: ['packages/halo/dist/**/*'],
  },
];
