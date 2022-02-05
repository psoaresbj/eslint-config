module.exports = {
  env: { node: true },
  extends: ['./core.js', './prettier.js'],
  rules: {
    'no-buffer-constructor': 'warn'
  }
};
