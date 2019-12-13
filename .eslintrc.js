module.exports = {
  extends: ['angellist'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.test.json'],
  },
  rules: {
    'import/extensions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
