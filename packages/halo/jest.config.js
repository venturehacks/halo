// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const rootDir = path.resolve(__dirname, '../..');

const testPathIgnorePatterns = [
  '.build',
  '.cache',
  '.docz',
  '.rollup.cache',
  '.sass-cache',
  'dist',
  'node_modules',
  'public',
];

module.exports = {
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/packages/halo/node_modules',
    '<rootDir>/packages/halo/src',
  ],
  projects: [
    {
      displayName: 'prettier',
      moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'css',
        'scss',
        'md',
        'mdx',
        'markdown',
      ],
      runner: 'jest-runner-prettier',
      testMatch: [
        '<rootDir>/packages/halo/**/*.js',
        '<rootDir>/packages/halo/**/*.jsx',
        '<rootDir>/packages/halo/**/*.ts',
        '<rootDir>/packages/halo/**/*.tsx',
        '<rootDir>/packages/halo/**/*.css',
        '<rootDir>/packages/halo/**/*.scss',
        '<rootDir>/packages/halo/**/*.md',
        '<rootDir>/packages/halo/**/*.mdx',
        '<rootDir>/packages/halo/**/*.markdown',
      ],
      testPathIgnorePatterns,
    },
    {
      displayName: 'stylelint',
      moduleFileExtensions: ['css', 'scss'],
      runner: 'jest-runner-stylelint',
      testMatch: [
        '<rootDir>/packages/halo/**/*.css',
        '<rootDir>/packages/halo/**/*.scss',
      ],
      testPathIgnorePatterns,
    },
    {
      displayName: 'eslint',
      moduleFileExtensions: ['ts', 'tsx'],
      moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^~/(.*)$': '<rootDir>/packages/halo/src/$1',
      },
      runner: 'jest-runner-eslint',
      testMatch: [
        '<rootDir>/packages/halo/**/*.ts',
        '<rootDir>/packages/halo/**/*.tsx',
      ],
      testPathIgnorePatterns,
      transform: {
        '^.+\\.(t|j)sx?$': ['babel-jest', { rootMode: 'upward' }],
      },
    },
    {
      displayName: 'unit',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
      moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^~/(.*)$': '<rootDir>/packages/halo/src/$1',
      },
      setupFiles: ['<rootDir>/packages/halo/test/jest-setup.ts'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testPathIgnorePatterns,
      testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(t|j)sx?$',
      transform: {
        '^.+\\.(t|j)sx?$': ['babel-jest', { rootMode: 'upward' }],
      },
    },
  ].filter(Boolean),
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
