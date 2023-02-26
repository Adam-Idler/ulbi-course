module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended', 
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'react/display-name': "off",
    semi: [2, 'always'],
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 0,
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      onlyAttribute: ['']
    }],
    '@typescript-eslint/explicit-function-return-type': [0, {
      allowExpressions: true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      allowNullableString: true
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