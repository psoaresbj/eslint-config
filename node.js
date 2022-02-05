module.exports = {
  env: { node: true },
  extends: ['./shared/core.js', './shared/prettier.js'],
  rules: {
    'no-buffer-constructor': 'warn'
  }
};
