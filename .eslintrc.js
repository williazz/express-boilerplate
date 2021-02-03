module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'func-names': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/no-unresolved': [0],
    'no-console': [0],
    'import/no-dynamic-require': [0],
    camelcase: [0],
    'import/newline-after-import': [0],
    'prefer-template': [0],
  },
  plugins: ['jest'],
};
