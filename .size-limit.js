module.exports = [
  {
    name: 'CommonJS',
    path: ['packages/halo/dist/cjs/halo.js'],
    limit: '50 kB',
  },
  {
    name: 'ES6',
    path: ['packages/halo/dist/esm/**/*.js'],
    limit: '50 kB',
  },
  {
    name: 'CSS',
    path: ['packages/halo/dist/esm/halo.esm.css'],
    limit: '10 kB',
  },
  {
    name: 'Total',
    path: [
      'packages/halo/dist/esm/halo.esm.js',
      'packages/halo/dist/esm/halo.css',
    ],
  },
  {
    name: 'Typings',
    path: ['packages/halo/dist/typings/**/*.d.ts'],
  },
];
