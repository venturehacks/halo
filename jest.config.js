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

module.exports = {
  verbose: true,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  projects: [
    {
      runner: 'jest-runner-prettier',
      displayName: 'prettier',
      moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'css',
        'scss',
        'md',
        'markdown',
      ],
      testMatch: [
        '<rootDir>/**/*.js',
        '<rootDir>/**/*.jsx',
        '<rootDir>/**/*.ts',
        '<rootDir>/**/*.tsx',
        '<rootDir>/**/*.css',
        '<rootDir>/**/*.scss',
        '<rootDir>/**/*.md',
        '<rootDir>/**/*.markdown',
      ],
      testPathIgnorePatterns,
    },
    {
      runner: 'jest-runner-stylelint',
      displayName: 'stylelint',
      moduleFileExtensions: ['css', 'scss'],
      testMatch: ['<rootDir>/**/*.css', '<rootDir>/**/*.scss'],
      testPathIgnorePatterns,
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
      transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
      },
      testMatch: ['<rootDir>/**/*.ts', '<rootDir>/**/*.tsx'],
      moduleFileExtensions: ['ts', 'tsx'],
      moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
      },
      testPathIgnorePatterns,
    },
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
      setupFiles: ['<rootDir>/test/jest-setup.ts'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testPathIgnorePatterns,
    },
  ].filter(Boolean),
};
