module.exports = {
  extends: ['plugin:import/typescript'],
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.tsx', '*.ts', '*.d.ts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  parserOptions: { ecmaFeatures: { tsx: true } },
  plugins: ['@typescript-eslint']
};
