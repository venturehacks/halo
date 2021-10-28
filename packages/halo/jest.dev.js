/* eslint-disable sort-keys-fix/sort-keys-fix */
/**
 * Separate jest config file used for package task
 * yarn run test:dev
 *
 * Runs only unit tests. No prettier or linters.
 */

// regexp pattern strings, *not* glob patterns!
// https://jestjs.io/docs/en/configuration#testpathignorepatterns-array-string
const testPathIgnorePatterns = [
  'CHANGELOG.md',
  'README.md',
  '.circleci',
  '.scss.d.ts',
  '/node_modules/',
  'misc/',
  'test/',
  // build support
  '.cache',
  '.docz',
  '.next',
  'dist/',
  'public/',
  // compiler
  '.rpt2_cache',
  // package
  'package.json',
  '.vscode',
];

export default {
  verbose: true,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  projects: [
    {
      displayName: 'unit',
      transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
      },
      testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(t|j)sx?$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
      moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
      },
      setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testPathIgnorePatterns,
    },
  ].filter(Boolean),
};
