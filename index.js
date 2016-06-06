
'use strict'

module.exports = {
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jasmine": true
  },
  "rules": {
    "comma-dangle": [1, "only-multiline"],
    "dot-location": [1, "property"],
    "no-empty-character-class": 1,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "quotes": [1, "single"],
    "consistent-return": 0,
    "semi": [1, "never"],
    "no-labels": 1,
    "no-empty": 0,
    "no-alert": 0,
    "strict": 0,
    "curly": 0,

    "jsx-quotes": [1, "prefer-single"],

    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/no-direct-mutation-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-did-mount-set-state": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/no-unknown-property": 1,
    "react/self-closing-comp": 1,
    "react/prefer-es6-class": 1,
    "react/jsx-uses-vars": 1,
    "react/no-deprecated": 1,
    "react/jsx-no-undef": 1,
  },
  "plugins": [
    "react"
  ]
}
