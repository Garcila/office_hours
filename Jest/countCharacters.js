function count ( string ) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let vowelsObject = {};

  for ( letter of string ) {
    if ( vowelsObject[letter] ) {
      vowelsObject[letter]++;
    } else {
      vowelsObject[letter] = 1;
    }
  }
  return vowelsObject;
}

module.exports = count;