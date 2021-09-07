const add = require( '../add' );
const subtract = require( '../subract' );


// GROUPING TESTS
describe( 'testing math functions', () => {


  describe( 'testing add function', () => {
    // I want to check that the sum is greater that one number
    test( 'is the result bigger than firstNumber', () => {
      expect( add( 10, 5 ) ).toBeGreaterThan( 10 );
    } )

    // I want to check if the function successfully adds two numbers
    test( 'It adds 10 + 10 and returns 20', () => {
      expect( add( 10, 10 ) ).toBe( 20 );
    } );

    // using toEqual instead of toBe
    test( 'It adds 10 + 10 and returns 20 using toEqual', () => {
      expect( add( 10, 10 ) ).toEqual( 20 );
    } );

    // check that the result is a number
    test( 'it returns a number', () => {
      expect( typeof ( add( 2, 5 ) ) === 'number' ).toBeTruthy()
    } );
  } );

  describe( 'testing subtract function', () => {
    // I want to check if the function successfully subtracts two numbers
    test( 'It subtracts 10 - 10 and returns 0', () => {
      expect( subtract( 10, 10 ) ).toBe( 0 );
    } );

    // using toEqual instead of toBe
    test( 'It subtracts 10 - 10 and returns 0 using toEqual', () => {
      expect( subtract( 10, 10 ) ).toEqual( 0 );
    } );

    // check that the result is a number
    test( 'it returns a number', () => {
      expect( typeof ( subtract( 10, 10 ) ) === 'number' ).toBeTruthy()
    } );
  } )
} );