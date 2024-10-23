module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      // Other custom rules...
    },
  };
  amodule.exports = {
    // ... existing configuration
    extends: [
      'react-app',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      // ... other rules
    },
  };
  