// ********************************************************************** 
// yellWords
//
// Write a function that accepts a string of words as an argument.
// The function should return a string with an '!' after each word.
// ** The function should not use any loops or iteration **
// ********************************************************************** 

function yellWords(str) {
  return str.split(' ').join('! ') + '!';
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = yellWords;
