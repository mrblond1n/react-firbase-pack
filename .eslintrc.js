module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-unresolved': 'off',
        'import/no-useless-path-segments': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',

        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-filename-extension': ['error', {extensions: ['.jsx']}],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-tag-spacing': ['error', {beforeClosing: 'never'}],
        'react/jsx-wrap-multilines': 'off',

        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks

        'arrow-body-style': ['error'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error'],
        'camelcase': 'off',
        'consistent-return': 'off',
        'curly': 'off',
        'eol-last': ['error', 'always'],
        'function-paren-newline': 'off',
        'global-require': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'jsx-a11y/alt-text': 'off',
        'linebreak-style': 'off',
        'max-len': ['error', 120],
        'newline-before-return': 'error',
        'no-cond-assign': 'off',
        'no-confusing-arrow': 'off',
        'no-console': ['error'],
        'no-else-return': 'off',
        'no-empty-pattern': 'off',
        'no-extra-boolean-cast': 'off',
        'no-extra-semi': ['error'],
        'no-multi-spaces': ['error'],
        'no-multiple-empty-lines': ['error'],
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'no-return-assign': ['error'],
        'no-return-await': 'off',
        'no-sequences': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unneeded-ternary': 'off',
        'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
        'no-use-before-define': 'off',
        'no-void': 'off',
        'nonblock-statement-body-position': ['error'],
        'object-curly-spacing': ['error', 'never'],
        'operator-linebreak': 'off',
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
        ],
        'prefer-const': ['error'],
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': ['error', 'single'],
        'react/jsx-boolean-value': 'off',
        'semi': ['error'],
        'spaced-comment': 'off',
    }
};
