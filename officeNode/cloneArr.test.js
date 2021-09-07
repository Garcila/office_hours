const { expect } = require( '@jest/globals' );
const clone = require( './cloneArr' );

// test that the created array and the original are the same

test( 'the original array and the new one are the same', () => {
  const arr = [3, 2, 1];
  expect( clone( arr ) ).toStrictEqual( arr );
} );