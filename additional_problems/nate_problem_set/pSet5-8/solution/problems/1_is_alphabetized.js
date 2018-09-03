// **********************************************************************
// isAlphabetized
//
// Given a string of characters, validate that they are sorted in alphabetcial order.
// There will be no spaces in the string and all characters will be lowercase.
//
// isAlphabetized('abc'); // ==> true
// isAlphabetized('acb'); // => false
// isAlphabetized('abbc'); // => true
// **********************************************************************
//  

function isAlphabetized(str) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < str.length - 1; i += 1) {
    var cur = str[i];
    var next = str[i + 1];

    var val1 = alpha.indexOf(cur);
    var val2 = alpha.indexOf(next);

    if (val1 > val2) {
      return false;
    }
  }

  return true;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isAlphabetized;

