// regexp pattern strings, *not* glob patterns!
// https://jestjs.io/docs/en/configuration#testpathignorepatterns-array-string
const testPathIgnorePatterns = [
  '.cache',
  '.circleci',
  '.docz',
  '.next/',
  '.vscode',
  '.scss.d.ts',
  '/node_modules/',
  'CHANGELOG.md',
  'dist/',
  'misc/',
  'test/',
];

module.exports = {
  verbose: true,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
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
      moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'jsx', 'json', 'node'],
      moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        // '\\.(s?css)$': 'empty/object', // NOTE (k1): TypeScript *should* make this a safe transform by ensuring classes and types exist before compiling
      },
      setupFiles: ['<rootDir>/test/jest-setup.ts'],

      testPathIgnorePatterns,
    },
  ].filter(Boolean),
};
