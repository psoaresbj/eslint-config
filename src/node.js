module.exports = {
  env: { node: true },
  extends: ['./core.js', './sort.js', './prettier.js'],
  rules: {
    'no-buffer-constructor': 'warn'
  }
};
