// ********************************
// *****   Problems Week 3    *****
// ********************************


// actual problems   (36 problems)


// **********************************************************************
// objectSize            
// threeInARow          
// threeIncreasing     
// power              
// reverb            
// countOfLetter    
// countRepeats    
// pairsToString          
// myForEach      
// mySelect      
// myMap        
// myEvery     
// mySome     
// countAdjacentSums      
// signFlipCount         
// powerSequence        
// collapseString      
// oddWordsOut        
// hasAllVowels      
// favoriteWord     
// mindPsAndQs     
// commonFactors  
// commonPrimeFactors    
// isPassing            
// variableNameify
// reverse2D
// productCallback
// greaterCallback
// objectSelect
// splitHalfArray
// threeUniqueVowels
// vowelShift   
// myFind
// hasSymmetry
// totalNumProblems
// evenSumArray
// numsToWords



// w3d1

/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/

// solution 1
function objectSize(obj) {
  var count = 0

  for (var k in obj) {
    count += 1;
  }

  return count;
}

// solution 2
function objectSize(obj) {
  return Object.keys(obj).length;
}


/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
  for (var i = 0; i < arr.length - 2; i += 1) {
    var first = arr[i];
    var second = arr[i + 1];
    var third = arr[i + 2];

    if (first === second && second === third) {
      return true;
    }
  }

  return false;
}


/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

function threeIncreasing(arr) {
  for (var i = 0; i < arr.length - 2; i += 1) {
    var first = arr[i];
    var second = arr[i + 1];
    var third = arr[i + 2];

    if (first + 1 === second && second + 1 === third) {
      return true;
    }
  }

  return false;
}


/***********************************************************************
Write a function `power(base, exp)` that takes in two numbers, a base
and exponent. The function should return `base` raised to `exp` power.
Solve this using a loop.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/

function power(base, exp) {
  var result = 1;

  while (exp > 0) {
    result *= base;

    exp -= 1;
  }

  return result;
}


/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
  var vowels = 'aeiuo';

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var cur = word[i];

    if (vowels.indexOf(cur) > -1) {
      return word + word.slice(i);
    }
  }

  return word;
}


// w3d2


/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

function countOfLetter(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i += 1) {
    var cur = string[i].toLowerCase();

    if (char === cur) {
      count += 1;
    }
  }

  return count;
}


/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
  var repeats = 0;
  var count = {};

  for (var i = 0; i < string.length; i += 1) {
    var cur = string[i];

    if (count[cur] === undefined) {
      count[cur] = 1;
    } else if (count[cur] === 1) {
      repeats += 1;
      count[cur] += 1;
    }
  }

  return repeats;
}


/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

function pairsToString(arr) {
  var str = '';

  for (var i = 0; i < arr.length; i += 1) {
    var char = arr[i][0];
    var num = arr[i][1];

    str += char.repeat(num);
  }

  return str;
}


// w3d3


/***********************************************************************
Write a function `myForEach(arr, cb)` that accepts an array and a
callback. It should call the `cb` for every element of the array,
passing the element, its corresponding index, and the array itself to
the callback. Do not use the built-in `Array.prototype.forEach` method.
The return value is irrelevant.

Examples:

function printInfo(ele, i, arr) {
  console.log(ele, "is at position", i, "in array", arr);
}

myForEach(['a', 'b', 'c'], printInfo); // prints
a is at position 0 in array [ 'a', 'b', 'c' ]
b is at position 1 in array [ 'a', 'b', 'c' ]
c is at position 2 in array [ 'a', 'b', 'c' ]


function printHalf(num) {
  console.log(num / 2);
}

myForEach([10, 50, 120], printHalf); // prints
5
25
60

Note that in the example above, the `printHalf` callback function only
expects a single parameter. If we try to pass more than one parameter to
the function, it will ignore the extras. `printHalf(10, 'what?', false)`
will print 5.
***********************************************************************/

function myForEach(array, cb) {
  for (var i = 0; i < array.length; i += 1) {
    cb(array[i], i, array);
  }
}


/***********************************************************************
Write a function `mySelect(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. It should return a new array with of all the elements
in the input array `arr` where the callback `cb` returns true.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

mySelect([1, 2, 3, 4, 5, 6], isEven); // => [2, 4, 6]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]

Note that in the examples above, the callback functions only expect a
single paramter, but your `mySelect` function should still try to pass 3
parameters to the callback. This allows us to create a versatile
`mySelect` function that works with various callbacks.
***********************************************************************/

function mySelect(arr, cb) {
  var results = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (cb(arr[i], i, arr) === true) {
      results.push(arr[i]);
    }
  }

  return results;
}


/***********************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. Do not use the built in `Array.prototype.map`
method. It should return an array where each element is the return value
of the callback given the element in the corresponding position. See
the examples.

Examples:

function doubler(num) {
  return num * 2;
}

myMap([2, 4, 6, 1], doubler); // => [4, 8, 12, 2]
myMap([9, 25, 100, 36, 81], Math.sqrt); // => [3, 5, 10, 6, 9]
***********************************************************************/

function myMap(arr, cb) {
  var results = [];

  for (var i = 0; i < arr.length; i += 1) {
    results.push(cb(arr[i], i, arr));
  }

  return results;
}


/***********************************************************************
Write a function `myEvery(arr, cb)` that takes in an array and a
callback. The function should call the cb for every element of the array.
The function should return true only if the callback returns true when
passed in every the element of the array. The function should return
false otherwise.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

myEvery([10, 4, 8, 20], isEven); // => true
myEvery([2, 2, 10, 11, 12], isEven); // => false
***********************************************************************/

function myEvery(arr, cb) {

  for (var i = 0; i < arr.length; i += 1) {

    if (cb(arr[i], i, arr) === false) {
       return false; 
    };
  }

  return true;
}


/***********************************************************************
Write a function `mySome(arr, cb)` that takes in an array and a callback.
The function should call the callback for every element of the array.
The function should return true if the callback returns true when passed
in any element of the array. The function should return false otherwise.

Example:

function isNegative(num) {
  return num < 0;
}

mySome([10, -10, 11, 4], isNegative); // => true
mySome([-10, -10, -11, -4], isNegative); // => true
mySome([2, 4, 6, 8], isNegative); // => false
***********************************************************************/

function mySome(arr, cb) {
  
  for (var i = 0; i < arr.length; i += 1) {

    if (cb(arr[i], i, arr) === true) {
      return true;
    }
  }

  return false;
}


/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:
countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/

function countAdjacentSums(arr, n) {
  var count = 0;

  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];
    var next = arr[i + 1];
    var sum = cur + next;

    if (sum === n) {
      count += 1;
    }
  }

  return count;
}


/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
***********************************************************************/

function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length - 1; i++) {
    var cur = numbers[i];
    var next = numbers[i + 1];

    if (cur === 0 || next === 0) {
      continue;
    }

    if (cur < 0 !== next < 0) {
      count += 1;
    }
  }

  return count;
}


/***********************************************************************
Write a function `powerSequence(base, length)` that takes in two numbers,
`base` and `length`. The function should return an array containing a
power sequence with the given `length`. Assume that the `length` is at
least 1.

The first number of a power sequence begins with `base`. The second
number of the sequence is the product between the first number and the
base. The third number of the sequence is the product between the second
number and the base...

Examples:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3); // => [ 8, 64, 512 ]
***********************************************************************/

function powerSequence(base, length) {
  var results = [];
  var cur = 1;

  while (results.length < length) {
    cur *= base;

    results.push(cur);
  }

  return results;
}


/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
***********************************************************************/

function collapseString(str) {
  newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];
    var next = str[i + 1];

    if (cur !== next) {
      newStr += cur;
    }
  }

  return newStr;
}


// w3d4


/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/

function oddWordsOut(sentence) {
  var words = sentence.split(' ');

  var evens = words.filter(function(val) {
    return val.length % 2 === 0;
  })
  
  return evens.join(' ');
}


/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

// solution 1
function hasAllVowels(str) {
  var vowels = 'aeiou';

  return vowels.split('').every(function(cur) {
    return str.indexOf(cur) > -1;
  });
}


// solution 2
function hasAllVowels(str) {
  var vowels = 'aeiou';

  for (var i = 0; i < vowels.length; i += 1) {
    var cur = vowels[i];

    if (str.indexOf(cur) === -1) {
      return false;
    }
  }

  return true;
}


/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') // => 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') // => 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') // => ''
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(' ');
  var maxWord = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var currentCount = findCount(favoriteLetter, word);

    if (currentCount > findCount(favoriteLetter, maxWord)) {
      maxWord = word;
    }
  }

  return maxWord;
}


function findCount(favoriteLetter, word) {
  var count = 0;

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];

    if (favoriteLetter === char) {
      count += 1;
    }
  }

  return count;
}


/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/

function mindPsAndQs(str) {
  var maxStreak = 0;
  var curStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (char === 'P' || char === 'Q') {
      curStreak += 1;

      if (curStreak > maxStreak) {
        maxStreak = curStreak;
      }
    } else {
      curStreak = 0;
    }
  }

  return maxStreak;
}


/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
***********************************************************************/

function commonFactors(num1, num2) {
  var results = [];

  for (var i = 1; i <= num1; i += 1) {

    if (num1 % i === 0 && num2 % i === 0) {

      results.push(i);
    }
  }

  return results;
}


/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
***********************************************************************/

function commonPrimeFactors(num1, num2) {
  var results = [];

  for (var i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0 && isPrime(i)) {
      results.push(i);
    }
  }

  return results;
}


function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


// P5


/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) // => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) // => false
*******************************************************************************/

function isPassing(assessments) {
  var total = 0;

  for (var i = 0; i < assessments.length; i += 1) {
    var exam = assessments[i];

    total += exam.score;
  }

  var average = total / assessments.length;

  return average >= 70;
}


/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  var firstWord = words[0].toLowerCase();
  var results = [firstWord];

  for (var i = 1; i < words.length; i += 1) {
    var firstChar = words[i][0].toUpperCase();
    var restOfWord = words[i].slice(1).toLowerCase();

    results.push(firstChar + restOfWord);
  }

  return results.join('');
}


/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

*******************************************************************************/

function reverse2D(array) {
  var str = '';

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var sub = array[i];

    for (var j = sub.length - 1; j >= 0; j -= 1) {
      var ele = sub[j];

      str += ele;
    }
  }

  return str;
}


// P5


/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) // => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) // => false
*******************************************************************************/

function isPassing(assessments) {
  var total = 0;

  assessments.forEach(function(exam) {
    total += exam.score;
  });

  var average = total / assessments.length;

  return average >= 70;
}


/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  var results = [words[0].toLowerCase()];

  for (var i = 1; i < words.length; i += 1) {
    var firstChar = words[i][0].toUpperCase();
    var restOfWord = words[i].slice(1).toLowerCase();

    results.push(firstChar + restOfWord);
  }

  return results.join('');
}


/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

*******************************************************************************/

function reverse2D(array) {
  var str = '';

  for (var i = array.length - 1; i > 0; i -= 1) {
    var currentArr = array[i];
    var str += getReversedStr(currentArr);
  }

  return str;
}

function getReversedStr(arr) {
  var str = '';

  for (var i = arr.length - 1; i > 0; i -= 1) {
    var char = arr[i];

    str += char;
  }

  return str;
}


/*******************************************************************************
Write a funtion productCallback(num1, num2, cb) that takes in two numbers and a
callback function. The function should return the result of the callback function
when passed the product of the two numbers.

Examples:

productCallback(-2, 6, Math.abs) // => 12
productCallback(12, 3, Math.sqrt) // => 6
*******************************************************************************/

function productCallback(num1, num2, cb) {
  return cb(num1) * cb(num2);
}


/*******************************************************************************
Write a function greaterCallback(num, cb1, cb2) that takes in a number and two
callback functions. The greaterCallback function should pass the number to
both callbacks and return the result of the callback that is the greater value.

Examples:

greaterCallback(25, Math.abs, Math.sqrt) // => 25
greaterCallback(16.6, Math.floor, Math.ceil) // => 17
*******************************************************************************/

function greaterCallback(num, cb1, cb2) {
  var cb1 = cb(num1);
  var cb2 = cb(num2);

  if (cb1 > cb2) {
    return cb1;
  } else {
    return cb2;
  }
}


// w3d5


/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; // => {
  one: "one",
  three: "three"
}
***********************************************************************/

function objectSelect(obj, callback) {
  var result = {};

  for (var key in obj) {
    var val = obj[key];

    if (callback(key, val)) {
      result[key] = val;
    }
  }

  return result;
}


/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

// solution 1
function splitHalfArray(array) {
  var midIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array.slice(0, midIndex), array.slice(midIndex)];
  } else {
    return [array.slice(0, midIndex), array.slice(midIndex + 1)];
  }
}


/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('icecream'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

function threeUniqueVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < vowels.length; i += 1) {
    var vowel = vowels[i];

    if (string.indexOf(vowel) > -1) {
      count += 1;
    }
  }

  return (count >= 3);
}


/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence) {
  var vowels = 'aeiou';
  var chars = sentence.split('');

  for (var i = 0; i < chars.length; i += 1) {
    var cur = chars[i];
    var vowelIdx = vowels.indexOf(cur);

    if (vowelIdx > -1) {
      var newIdx = (vowelIdx + 1) % 5;

      chars[i] = vowels[newIdx];
    } 
  }

  return chars.join('');
}


// P6


/*******************************************************************************
Write a function `myFind(arr, cb)` that accepts an array and a callback. It should
return the first element of the array where the callback returns true when passed
each element. The function should return undefined if the callback does not return
true for any element.

Example:

function isUpper(str) {
  return str.toUpperCase() === str;
}

myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper) // => 'PREP'
myFind(['hello', 'world'], isUpper) // => undefined


function isEven(n) {
  return n % 2 === 0;
}

myFind([11, 7, 10, 20], isEven) // => 10
myFind([3, 5, 9], isEven) // => undefined
*******************************************************************************/

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i += 1) {
    var ele = arr[i];

    if (cb(ele, i, arr)) {
      return ele;
    }
  }
}


/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
*******************************************************************************/

function hasSymmetry(array) {
  var point1 = 0;
  var point2 = array.length - 1;

  while (point1 < point2) {
    if (array[point1] !== array[point2]) {
      return false;
    }

    point1 += 1;
    point2 -= 1;
  }

  return true;
}


/******************************************************************************
Write a function totalNumProblems(assessments) that takes in an object of assessment
objects. The function should return the total number of problems in all assessments.

Example:

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

totalNumProblems(assessments) // => 29
*******************************************************************************/

function totalNumProblems(assessments) {
  var totalProblems = 0;

  for (var key in assessments) {
    var currentAssessment = assessments[key];
    var problemsArr = currentAssessment.problems;

    totalProblems += problemsArr.length;
  }

  return totalProblems;
}


/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
  var results = [];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    results.push(findSumOfEvens(num));
  }

  return results;
}

function findSumOfEvens(num) {
  var total = 0;

  for (var i = 2; i <= num; i += 2) {
    total += i;
  }

  return total;
}


/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
*******************************************************************************/

function numsToWords(numString) {
  var lookup = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 
    'Six', 'Seven', 'Eight', 'Nine'
  ];
  var str = '';

  for (var i = 0; i < numString.length; i += 1) {
    var num = Number(numString[i]);

    str += lookup[num];
  }

  return str;
}



