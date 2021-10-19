module.exports = {
  extends: ['angellist'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
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
        default: 'array-simple',
      },
    ],
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
    // TODO: new rules from recommended in ESLint 7
    '@typescript-eslint/explicit-module-boundary-types': 'off', // TODO-research
    '@typescript-eslint/ban-types': 'off', // TODO-research. {} is a banned type.
    '@typescript-eslint/ban-ts-comment': 'off', // TODO-enabled in shared config. Annotate ts-ignore's with comment.
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // TODO-this should be turned on.
  },
};
