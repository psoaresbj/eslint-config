module.exports = {
  env: { node: true },
  extends: ['./src/core.js', './src/sort.js', './src/prettier.js'],
  rules: {
    'no-buffer-constructor': 'warn'
  }
};
