// ************************************************************
// scrabbleScore
//
// You are given a string with characters and integers and need to return a scrabble score.
// The score can be calculated by taking the number of characters times it's point value.

// Example :

// 'm2iiii1ssss1pp4'
//   m2 -> 2
//   iiii1 -> 4
//   ssss1 -> 4
//   pp4 -> 8

// scrabbleScore('m2iiii1ssss1pp4'); // => 18
// ************************************************************

function scrabbleScore(str) {
  var score = 0;
  var curCount = 0;
  var nums = '1234567890';

  for (var i = 0; i < str.length - 1; i += 1) {
    var cur = str[i];
    var next = str[i + 1];

    curCount += 1; 

    if (nums.indexOf(next) > -1) {
      score += (curCount * next);

      curCount = 0;
      i += 1;
    }
  }

  return score;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = scrabbleScore;
