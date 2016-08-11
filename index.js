
'use strict'

module.exports = {
  "root": true,

  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "generators": true,
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jasmine": true
  },
  "rules": {
    "no-unused-vars": [1, {vars: "local", args: "none"}],
    "comma-dangle": [1, "only-multiline"],
    "rest-spread-spacing": [1, "never"],
    "dot-location": [1, "property"],
    "no-empty-character-class": 1,
    "no-dupe-class-members": 1,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-this-before-super": 1,
    "operator-assignment": 1,
    "quotes": [1, "single"],
    "no-duplicate-case": 1,
    "consistent-return": 0,
    "no-empty-pattern": 1,
    "semi": [1, "never"],
    "no-implied-eval": 1,
    "no-extra-bind": 1,
    "valid-typeof": 1,
    "no-dupe-keys": 1,
    "no-labels": 1,
    "no-empty": 0,
    "no-alert": 0,
    "no-undef": 1,
    "strict": 0,
    "curly": 0,

    "jsx-quotes": [1, "prefer-single"],

    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/no-direct-mutation-state": 1,
    "react/jsx-space-before-closing": 1,
    "react/jsx-no-comment-textnodes": 1,
    "react/no-did-update-set-state": 1,
    "react/no-did-mount-set-state": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-indent-props": [1, 2],
    "react/jsx-no-target-blank": 1,
    "react/no-unknown-property": 1,
    "react/jsx-wrap-multilines": 1,
    "react/self-closing-comp": 1,
    "react/prefer-es6-class": 1,
    "react/wrap-multilines": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-indent": [1, 2],
    "react/jsx-uses-vars": 1,
    "react/no-deprecated": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-key": 1,
  },
  "plugins": [
    "react"
  ]
}
