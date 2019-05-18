module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    },
    project: 'tsconfig.json'
  },
  plugins: ['@typescript-eslint/tslint'],
  rules: {
    linebreakStyle: false,
    missingJsdoc: false,
    esversion: 6,
    semi: [1, 'always'],
    '@typescript-eslint/tslint/config': [
      1,
      {
        lintFile: './tslint.json'
      }
    ]
  }
};
