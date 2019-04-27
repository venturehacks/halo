module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else']
    }],
    'declaration-empty-line-before': 'never',
    'max-empty-lines': 1,
    'no-invalid-double-slash-comments': null,
    'number-leading-zero': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['inside-block'],
      },
    ],
    'scss/at-rule-no-unknown': true,
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-colon-notation': 'double',
  },
};
