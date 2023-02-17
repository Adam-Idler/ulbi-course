module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 0,
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      onlyAttribute: ['']
    }],
    '@typescript-eslint/explicit-function-return-type': [0, {
      allowExpressions: true
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ]
};