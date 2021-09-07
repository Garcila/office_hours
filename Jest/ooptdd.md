# TDD AND CLASSES

## TDD

I liked this sites to help you dig deeper
- [Comprehensive tutorial](https://zetcode.com/javascript/jest/)
- [Cheat sheet](https://devhints.io/jest)

- Documentation
- Create a package.json
  - manually
  - or better with npm init [-y]
- Create a add.js file and add a function that adds two numbers
- module.exports = name of the file
- npm install jest
- add a test folder
  - include a file with the name add.test.js - module.exports = add
  - create the first test
- To run the test
  - make sure to change the script to test: 'jest' on packgage.json
  - run npm run test
- Explore verbose option, by checking first jest --help.  Change it on package.json
- Show the same test using a different matcher from https://jestjs.io/docs/using-matchers
- Group tests with describe('text', () =>{})
- npm test -- --coverage or in package.json add object 'jest':{'collectCoverage':true},
- even better way to see coverage on HTML is 'jest':{'collectCoverage':true,'coverageReporters': ['html']},

## CLASES

- Using p5.js as a way to visualize classes and provide a differen environment
- Example p5.js 
  - https://editor.p5js.org/Garcila/sketches/oew0pFK74
  - https://editor.p5js.org/Garcila/sketches/J0HpD19F6
- Activity 
  - Create a class Dot