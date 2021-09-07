const count = require( '../countCharacters' );

// I want to test that the result of the function is correct
test( 'Does the count function returns the right answer', () => {
  const stringToEvaluate = 'Alpaca';

  expect( count( stringToEvaluate ) ).toEqual( { A: 1, a: 2, l: 1, p: 1, c: 1 } );
} )