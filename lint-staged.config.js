module.exports = {
  '**/*.{js,jsx,graphql,md,mdx,markdown}': ['prettier --write', 'git add'],
  '**/*.{ts,tsx}': ['prettier --write', 'eslint --fix', 'git add'],
  '**/*.{css,scss}': ['prettier --write', 'stylelint --fix', 'git add'],
};
