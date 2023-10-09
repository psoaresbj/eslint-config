/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  extends: ['plugin:import/typescript'],
  globals: {
    JSX: 'readonly'
  },
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.tsx', '*.ts', '*.d.ts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  parserOptions: { ecmaFeatures: { tsx: true }, project: true },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-dupe-class-members': 'off',
    'no-undef': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }]
  }
};
