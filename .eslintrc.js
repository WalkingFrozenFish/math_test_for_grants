module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
}