// ********************************************************************** 
// removeAllSpaces
//
// Write a function that accepts a string of words as an argument.
// The function should return a new string with all the spaces removed.
// ** The function should not use any loops or iteration **
// ********************************************************************** 

function removeAllSpaces(str) {
  return str.split(' ').join('');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = removeAllSpaces;
