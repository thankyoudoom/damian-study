// ********************************************************************** 
// divisibleBy
//
// Write a function that accepts a number.
// The function should return the first number that the original number is evenly divisbly by.
// Do not include 1 as an evenly divisible number.
// ********************************************************************** 

function divisibleBy(num) {
  for (var i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      return i;
    }
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleBy;
