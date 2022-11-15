module.exports = {
  plugins: ['sort-class-members', 'sort-imports-es6-autofix', 'sort-imports-requires', 'sort-keys-fix'],
  rules: {
    'sort-class-members/sort-class-members': [
      'error',
      {
        order: [
          '[static-properties-alpha]',
          '[static-methods-alpha]',
          '[properties-alpha]',
          '[constructor]',
          '[methods-alpha]'
        ],
        /* eslint-disable sort-keys-fix/sort-keys-fix*/
        groups: {
          'static-properties-alpha': [{ type: 'property', static: true, sort: 'alphabetical' }],
          'static-methods-alpha': [{ type: 'method', static: true, sort: 'alphabetical' }],
          'properties-alpha': [{ type: 'property', propertyType: 'Literal', sort: 'alphabetical' }],
          'methods-alpha': [{ type: 'method', sort: 'alphabetical' }]
        }
        /* eslint-enable sort-keys-fix/sort-keys-fix*/
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-imports-requires/sort-imports': [
      'error',
      {
        unsafeAutofix: true,
        useOldSingleMemberSyntax: true
      }
    ],
    'sort-imports-requires/sort-requires': [
      'error',
      {
        unsafeAutofix: true,
        useAliases: false,
        useOldSingleMemberSyntax: true
      }
    ],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }]
  }
};
