const { expect } = require( '@jest/globals' );
const subtract = require( './subtract' );

test( 'subtracting 10 - 55 to equal -45', () => {
  expect( subtract( 10, 55 ) ).toEqual( -45 );
} );