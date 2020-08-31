# ts-library

# mypluralize
A Node.js module that returns the plural form of any noun <br/>
[![Build Status](https://travis-ci.org/chargoyao/ts-library.svg?branch=develop)](https://travis-ci.org/chargoyao/ts-library)
[![Coverage Status](https://coveralls.io/repos/github/chargoyao/ts-library/badge.svg?branch=master)](https://coveralls.io/github/chargoyao/ts-library?branch=master)

## Installation 
```sh
npm install mypluralize --save
yarn add mypluralize
bower install pluralize --save
```
## Usage
### Javascript
```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```
## Test 
```sh
npm run test