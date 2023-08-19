module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@docusaurus/recommended',
    'plugin:react/recommended'
  ],
  overrides: [],
  plugins: ['prettier', 'react', 'react-hooks', '@docusaurus'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@docusaurus/string-literal-i18n-messages': 0,
    '@docusaurus/no-untranslated-text': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0
  }
}
