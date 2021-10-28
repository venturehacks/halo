/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = [
  {
    name: 'CommonJS',
    path: [
      'packages/halo/dist/cjs/halo.cjs',
      'packages/halo/dist/cjs/halo.css',
    ],
    limit: '100 kB',
  },
  {
    name: 'ES6',
    path: [
      'packages/halo/dist/esm/**/*.mjs',
      'packages/halo/dist/esm/halo.css',
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
