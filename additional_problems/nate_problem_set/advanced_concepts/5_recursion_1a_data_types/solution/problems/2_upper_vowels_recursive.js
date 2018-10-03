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
// **********************************************************************

// solution 1
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

// solution 2
function upperVowels(str, i=0) {
  if (i === str.length) {
    return str;
  }

  var vowels = 'aeiou';
  var cur = str[i].toLowerCase();

  if (vowels.indexOf(cur) > -1) {
    var str = str.slice(0, i) + cur.toUpperCase() + str.slice(i + 1);
  }

  return upperVowels(str, i + 1);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = upperVowels;
