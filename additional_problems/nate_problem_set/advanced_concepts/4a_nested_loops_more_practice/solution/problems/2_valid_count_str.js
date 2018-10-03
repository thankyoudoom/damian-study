// **********************************************************************
// validCountStr
//
// Write a function that accepts a string and a countStr.
// The countStr contains characters followed by the number of times the character should appear in the string
//
// If the countStr is 't1o3g1', and the string is 'today is a good day'
// 't' should appear 1 time (true)
// 'o' should appear 3 times (true)
// 'g' should appear 1 time (true)
//
// The function should return true if all the characters and counts in the count string are valid, flase otherwise.
//
//
// Examples :
// 
// validCountStr('today is a good day', 't1o3g1'); // => true
// validCountStr('today is a good day', 't1o3g2)); // => false
// validCountStr('today is a good day', ''); // => true
// **********************************************************************

function validCountStr(str, sub) {
  for (var i = 0; i < sub.length; i += 2) {
    var char = sub[i];
    var num = Number(sub[i + 1]);
     
    var count = 0;
    
    for (var j = 0; j < str.length; j += 1) {
      var cur = str[j];

      if (cur === char) {
        count += 1;
      }
    }

    if (num !== count) {
      return false;
    }
  }

  return true;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = validCountStr;
