module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [ // prop-types
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    rules: {
        'react/prop-types': 1,
        'react/jsx-max-props-per-line': 1, // Giới hạn tối đa đạo cụ trên một dòng trong JSX (có thể sửa được)
        'linebreak-style': 0,
        'import/no-extraneous-dependencies' : 0,
        'class-methods-use-this': 0,
        'indent': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'react/prefer-stateless-function': 0,
        "prettier/prettier": ["error",{
           "endOfLine":"auto"
         }],
         "import/no-unresolved": 0,
         "import/extensions": 0,
         "no-undef": 0,
         "import/prefer-default-export": 0,
         "import/order": 1,
         "no-use-before-define": 0,
         "no-param-reassign": 0,
         "react/jsx-uses-vars": 2

    },
    plugins: ["prettier"],
    env: {
        "es6": true,
        "browser": true,
        "node": true
    }
};