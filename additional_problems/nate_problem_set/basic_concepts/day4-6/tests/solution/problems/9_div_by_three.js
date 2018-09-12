// ********************************************************************** 
// divByThree
//
// Write a function that accepts a max number as an argument.
// The function should return an array of numbers less than the max number.
// The array should only include numbers evenly divisible by 3, excluding 0.
// ********************************************************************** 

function divByThree(max) {
  var results = [];

  for (var i = 3; i < max; i += 1) {
    if (i % 3 === 0) {
      results.push(i);
    }
  }

  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divByThree;

