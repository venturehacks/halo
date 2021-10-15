/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = [
  {
    name: 'CommonJS module',
    path: ['dist/halo.js', 'dist/halo.css'],
    limit: '100 kB',
  },
  {
    name: 'ES6 module',
    path: ['dist/halo.module.js', 'dist/halo.module.css'],
    limit: '100 kB',
  },
  {
    name: 'Typings',
    path: ['dist/typings/**/*.d.ts'],
    limit: '15 kB',
  },
];
