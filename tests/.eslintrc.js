module.exports = {
  plugins: ['mocha'],
  extends: ['plugin:eslint-plugin-mocha/recommended'],
  env: {
    mocha: true,
  },
  rules: {
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'off',
  },
};
