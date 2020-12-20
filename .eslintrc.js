module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'func-names': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
