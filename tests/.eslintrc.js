module.exports = {
  plugins: ['mocha'],
  extends: ['plugin:eslint-plugin-mocha/recommended'],
  env: {
    mocha: true,
  },
  rules: {
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-return-from-async': 'off',
    'mocha/no-exports': 'off',
  },
};
