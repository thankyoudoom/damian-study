// ********************************************************************** 
// capFirstChar
//
// Write a function that accepts a string of words as an argument.
// The function should return a new string with all the words caplitalized.
// ********************************************************************** 

function capFirstChar(str) {
  var words = str.split(' ');
  var results = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var first = word[0].toUpperCase();
    var rest = word.slice(1);

    results.push(first + rest);
  }

  return results.join(' ');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capFirstChar;
