module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // TODO stylelint 14
    'alpha-value-notation': null,
    'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'function-calc-no-unspaced-operator': null,
    'keyframes-name-pattern': null,
    'no-invalid-position-at-import-rule': null,
    'number-max-precision': null,
    'property-disallowed-list': ['float'],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['size-adjust'],
      },
    ],
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'shorthand-property-no-redundant-values': null,
    'value-no-vendor-prefix': null,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/percent-placeholder-pattern': /^[a-z0-9-]+$/,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-after': null,
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
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
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'each',
          'error',
          'include',
          'use',
          'mixin',
          'apply',
          'layer',
          'tailwind',
          'screen',
          'extend',
          'for',
        ],
      },
    ],
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'selector-attribute-quotes': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'string-quotes': 'single',
    'font-family-name-quotes': null,
  },
};
