module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules  : {
    'string-quotes'            : 'single',
    'max-nesting-depth'        : 4,
    'selector-nested-pattern'  : '^&',
    'no-descending-specificity': null,
    indentation                : 2,
  },
};
