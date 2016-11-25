module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "script"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "$": true,
        "lj": true,
        "_": true,
        "api": true,
        "moment": true,
        "template": true
    },
    "rules": {
        "no-param-reassign": ["error", { "props": false }],
        "quote-props": ["error", "consistent"],
        "comma-dangle": 0,
        "import/no-unresolved": 0
    }
};