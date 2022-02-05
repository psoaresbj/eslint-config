module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
};
