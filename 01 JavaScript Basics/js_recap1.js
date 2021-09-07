// - Arithmetic
//   - create functions capable of different arithmetic operations
// - function - call it arithmetic 😊
// - sum - subtract - multiply - divide
// - sum  number + number  (numberOne, numberTwo) 😊
// - add number 😊
// - return the result

function arithmetic(numberOne, numberTwo, operation) {
  if (operation === 'sum') {
    var result = numberOne + numberTwo;
  } else if (operation === 'subtract') {
    var result = numberOne - numberTwo;
  } else if (operation === 'multiply') {
    var result = numberOne * numberTwo;
  } else if (operation === 'divide') {
    var result = numberOne / numberTwo;
  }

  return result;
}


// - Odd or Even
//   - create a function that determines whether a number is odd or even
// - create function - oddOrEven
// - define what a odd and an even number is
// - Parameters - a number (numberToCheck)
// - Create a list for a for loop - can be, but not required
// - Check if odd or even
// - Return a sting or a boolean

function oddOrEven(numberToCheck){
  if(numberToCheck % 2 === 0){
    result = 'even';
  } else {
    result = 'odd';
  }
  return result;
}

// 10 odd or even

















- Log Nums
  - create a function that prints all whole numbers from 1 to a given number.


















