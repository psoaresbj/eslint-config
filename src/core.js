const { jsExtensions } = require('./extensions');

module.exports = {
  env: { browser: true, es2021: true, jest: true },
  globals: {
    console: false,
    exports: false,
    global: false,
    module: false,
    require: false
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off'
      }
    }
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      parserOpts: {
        plugins: ['flow', 'jsx', 'classProperties', 'classPrivateProperties', 'classPrivateMethods']
      }
    },
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module'
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'sort-class-members',
    'sort-imports-es6-autofix',
    'sort-keys-fix',
    'prettier'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'default-case': 'off',
    'implicit-arrow-linebreak': 0,
    'import/default': 0,
    'import/named': 'error',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,
    'max-depth': 'error',
    'max-len': 0,
    'max-params': ['error', 4],
    'new-cap': ['error', { capIsNewExceptions: ['BigNumber'] }],
    'no-alert': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 0,
    'no-div-regex': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-process-env': 0,
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-modules': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-sync': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-curly-newline': 0,
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var']
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      }
    ],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false },
        VariableDeclarator: { array: true, object: true }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-keys': ['error', 'asc', { natural: true }],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'spaced-comment': 'error',
    'valid-jsdoc': 'error',
    'vars-on-top': 'error'
  },
  settings: {
    'import/extensions': jsExtensions,
    'import/parsers': {
      '@babel/eslint-parser': jsExtensions
    },
    'import/resolver': {
      node: { extensions: jsExtensions }
    }
  }
};
