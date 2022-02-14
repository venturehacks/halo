/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = [
  {
    name: 'CommonJS',
    path: ['packages/halo/dist/cjs/halo.cjs'],
    limit: '25 kB',
  },
  {
    name: 'ES6',
    path: ['packages/halo/dist/esm/**/*.mjs'],
    limit: '25 kB',
  },
  {
    name: 'CSS',
    path: ['packages/halo/dist/esm/halo.css'],
    limit: '10 kB',
  },
  {
    name: 'Total',
    path: [
      'packages/halo/dist/esm/halo.mjs',
      'packages/halo/dist/esm/halo.css',
    ],
  },
  {
    name: 'Typings',
    path: ['packages/halo/dist/typings/**/*.d.ts'],
  },
];
