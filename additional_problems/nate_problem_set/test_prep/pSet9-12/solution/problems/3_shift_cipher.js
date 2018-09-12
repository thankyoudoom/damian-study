// ********************************************************************** 
// shiftCipher (Hard)
//
// You are given a string that has groups of characters followed by a shiftBy number
// Shift all of the characters by the shiftBy number. 'abc2' => cde
// Return all shifted characters in a new string.
// If a shiftBy number has a '!' before it then shift the characters backward. 'abc!2' => 'yza'
// Spaces should be included in the return string. 'abc2 abc!2' => 'cde yza'
// All shift by numbers will be less then 10.
//
// Examples :
//   shiftCipher('abc2ghij!3'); // => 'cdedefg'
//   shiftCipher('abc5 ghij!9'); // => 'fgh xyza'
//   shiftCipher('czggj5 cqnan!9'); // => 'hello there'
//   shiftCipher('jdzcv9 ivl!8 xa4 qjyyh!9'); // => 'smile and be happy'
// ********************************************************************** 

function shiftCipher(str) {
  var nums = '1234567890';
  var start = 0;
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];
    var subStr = str.slice(start, i); 

    if (char === ' ') {
      newStr += ' ';
      start = i + 1;
    } else if (char === '!') {
      newStr += shift(subStr, -str[i + 1]);
      start = i + 1;
    } else if (nums.indexOf(char) > -1) {
      newStr += shift(subStr, Number(str[i]));
      start = i + 1;
    }
  }

  return newStr;
}

function shift(str, shiftBy) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];
    var curIdx = alpha.indexOf(cur);
    var newIdx = (curIdx + shiftBy) % 26;

    if (newIdx < 0) {
      newIdx = 26 + newIdx;
    }

    newStr += alpha[newIdx];
  }

  return newStr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shiftCipher;
