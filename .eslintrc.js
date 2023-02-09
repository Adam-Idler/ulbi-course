module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
