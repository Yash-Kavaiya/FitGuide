module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      // Add custom rules if needed
      'prettier/prettier': 'error',
    },
  };
  