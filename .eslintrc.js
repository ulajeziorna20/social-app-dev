module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './jsconfig.json'
  },
  plugins: ['react', 'import', 'react-hooks', 'prettier', 'unused-imports'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/first': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        },
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always'
      }
    ],
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ]
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53'
    }
  }
}
