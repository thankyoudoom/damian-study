// **********************************************************************
// upperVowels
//
// Create a funtion that accepts a lower case string.
// It should return a string with all the vowels converted to upper case.
// Recurion should be used to build the string, loops are not permitted.
//
//
// Examples :
//
// upperVowels('excellent'); // => 'ExcEllEnt'
// upperVowels('spectacular'); // => 'spEctAcUlAr'
//
//
// Hint : Use an outer function to hold variable state
//      : The inner function can be the recursive function
// **********************************************************************

function upperVowels(str) {
  var vowel = 'aeiou';
  var newStr = '';
  var i = 0;

  function inner() {
    if (i >= str.length) {
      return;
    }

    if (vowel.indexOf(str[i]) > -1) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }

    i += 1;
    inner();
  }

  inner()
  return newStr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = upperVowels;
