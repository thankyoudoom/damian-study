// **********************************************************************
// mostFrequentChar
//
// Write a function that accepts a string and returns the most commonly occuring character.
// There will not be any ties.
//
// Examples :
//
// mostFrequentChar('abbc'); // => 'b'
// mostFrequentChar('learning to code is fun'); // => 'n'
// mostFrequentChar(''); // => ''
// **********************************************************************

function mostFrequentChar(str) {
  var maxChar = '';
  var maxCount = 0;

  for (var i = 0; i < str.length; i += 1) {
    var curChar = str[i];
    var curCount = 1;
    if (curChar === ' ') {
      continue;
    }

    for (var j = i + 1; j < str.length; j += 1) {
      var next = str[j];

      if (curChar === next) {
        curCount += 1;

        if (curCount > maxCount) {
          maxChar = curChar
          maxCount = curCount;
        }
      }
    }
  }

  return maxChar;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentChar;
