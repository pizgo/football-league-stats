// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "simple-import-sort"
    ],
    "rules": {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "no-unused-vars": "warn",
        "react/prop-types": "warn",
        "no-useless-escape": "warn",
        "no-undef": "warn",
        "react/jsx-key": "warn",
        "react/no-unescaped-entities": "warn",
    }
}
