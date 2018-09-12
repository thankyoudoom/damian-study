// ********************************************************************** 
// noConsonants
//
// Write a function that accepts a string as an argument.
// The function should return a new string with all consonants removed.
// There will be no uppercase characters
// ********************************************************************** 

function noConsonants(str) {
  var chars = 'bcdfghjklmnpqrstvwxyz';
  var results = [];

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (chars.indexOf(cur) === -1) {
      results.push(cur);
    }
  }

  return results.join('');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = noConsonants;
