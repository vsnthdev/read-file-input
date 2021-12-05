/*
 *  Run control for ESLint.
 *  Created On 05 December 2021
 */

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'simple-import-sort', '@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/extensions': ['.js'],
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['off', 'single'],
        semi: ['error', 'never'],
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
}
