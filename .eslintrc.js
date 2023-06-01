module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-native/all'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  globals: {
    __DEV__: true,
    Promise: true,
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
    'react-native/sort-styles': 0,
    'react/prop-types': 0,
    curly: ['off'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-undef': 'error',
    'no-empty': 'error',
    'no-alert': 0,
    'no-duplicate-imports': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'max-lines': ['warn', 1000],
    'no-var': 'error',
    'no-debugger': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    quotes: ['warn', 'single', 'avoid-escape'],
    'lines-between-class-members': ['error', 'always'],
  },
};
