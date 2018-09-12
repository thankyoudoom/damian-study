// ********************************************************************** 
// getWordsReverse
//
// Write a function that accepst a string of words as an argument.
// The function should return an array of words found in the string in reverse.
// ********************************************************************** 

function getWordsReverse(str) {
  var results = [];
  var words = str.split(' ');

  for (var i = words.length - 1; i >= 0; i -= 1) {
    var word = words[i];

    results.push(word);
  }

  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getWordsReverse;

