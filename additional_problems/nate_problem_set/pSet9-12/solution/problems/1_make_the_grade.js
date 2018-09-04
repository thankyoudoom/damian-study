// ********************************************************************** 
// makeTheGrade (Easy)
//
// You are given an array of grades in number format.
// Convert the average of the number grades into an array of letter grades.
//
// A 90 -> 100 (includes 90)
// B 80 -> 89  (includes 80 and 89)
// C 70 -> 79
// D 60 -> 69
// F 0 - 59
//
// [95, 83, 92, 68] => ['A', 'B', 'A', 'B']
//
// 95 / 1                   => 95 => 'A'
// (95 + 83) / 2            => 89 => 'B'
// (95 + 83 + 92) / 3       => 90 => 'A'
// (95 + 83 + 92 + 68) / 4  => 84.5 => 'B'
//
// makeTheGrade([95, 83, 92, 68]); // => ['A', 'B', 'A', 'B']
// makeTheGrade([81, 59, 37, 100, 93]); // => ['B', 'C', 'F', 'C', 'C']
// ********************************************************************** 

function makeTheGrade(grades) {
  var sum = 0;
  var results = [];

  for (var i = 0; i < grades.length; i += 1) {
    sum += grades[i];

    var curAvg = sum / (i + 1);
    var letterGrade = getLetterGrade(curAvg);

    results.push(letterGrade);
  }

  return results;
}

function getLetterGrade(numAverage) {
  if (numAverage > 89) {
    return 'A';
  } else if (numAverage > 79) {
    return 'B';
  } else if (numAverage > 69) {
    return 'C';
  } else if (numAverage > 59) {
    return 'D';
  } else {
    return 'F';
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = makeTheGrade;
