/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  '**/*.{js,jsx,graphql,md,markdown}': ['prettier --write', 'git add'],
  '**/*.{ts,tsx}': ['prettier --write', 'tslint --fix', 'git add'],
  '**/*.{css,scss}': ['prettier --write', 'stylelint --fix', 'git add'],
};
