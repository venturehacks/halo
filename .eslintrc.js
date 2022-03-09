module.exports = {
  root: true,
  extends: ['angellist'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.base.json',
      './packages/halo/tsconfig.json',
      './packages/halo/tsconfig.test.json',
    ],
  },
  rules: {
    'import/extensions': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    // NOTE(drew): this is throwing false positives
    '@typescript-eslint/no-unused-vars': 'off',
    // NOTE(drew):
    // Turning off import/*, as it's busted on monorepo's.
    // Fix is in latest release, but need to upgrade
    // https://github.com/import-js/eslint-plugin-import/issues/1174
    'import/no-extraneous-dependencies': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     // allow devDependencies in source code
    //     devDependencies: true, // allow
    //     optionalDependencies: false,
    //     peerDependencies: false,
    //   },
    // ],
  },
};
