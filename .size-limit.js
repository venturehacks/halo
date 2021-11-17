/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = [
  {
    name: 'CommonJS',
    path: ['packages/halo/dist/cjs/halo.cjs'],
    limit: '100 kB',
  },
  {
    name: 'ES6',
    path: ['packages/halo/dist/esm/**/*.mjs'],
    limit: '100 kB',
  },
  {
    name: 'CSS',
    path: ['packages/halo/dist/esm/halo.css'],
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
