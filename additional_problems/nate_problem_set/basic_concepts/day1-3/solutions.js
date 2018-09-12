// **********************************************************************
// Write a function that accepts a minimum number and maximum number as arguments.
// The function should print all numbers including the minimum number and excluding the maximum.

function minInclusiveRange(min, max) {
  for (var i = min; i < max; i += 1) {
    console.log(i);
  }
}

// minInclusiveRange(4, 10); // prints : 4, 5, 6, 7, 8, 9
// minInclusiveRange(-3, 4); // prints : -3, -2, -1, 0, 1, 2, 3


// **********************************************************************
// Write a function that accepts a minimum number and maximum number as arguments.
// The function should print all numbers excluding the minimum number and including the maximum.

function maxInclusiveRange(min, max) {
  for (var i = min + 1; i <= max; i += 1) {
    console.log(i);
  }
}

// maxInclusiveRange(4, 10); // prints : 5, 6, 7, 8, 9, 10
// maxInclusiveRange(-3, 4); // prints : -2, -1, 0, 1, 2, 3, 4


// **********************************************************************
// Write a function that accepts a minimum number and maximum number as arguments.
// The function should print all numbers in reverse.
// The minumum numbers should be included but the maximum number should be excluded.

function reverseRangeMinInclusive(min, max) {
  for (var i = max - 1; max >= 0; max -= 1) {
    console.log(i);
  }
}

// reverseRangeMinInclusive(4, 10); // prints : 9, 8, 7, 6, 5, 4
// reverseRangeMinInclusive(-3, 4); // prints : 3, 2, 1, 0, -1, -2, -3


// **********************************************************************
// Write a function that accepts a string and prints each character of the string.
// The function should use an intermediary variable to store each character on each iteration.

function printChars(str) {
  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    console.log(cur); 
  }
}

// printChars('happy'); // prints : 'h', 'a', 'p', 'p', 'y'
// printChars('bootcamp'); // prints : 'b', 'o', 'o', 't', 'c', 'a', 'm', 'p'


// **********************************************************************
// Write a function that accepts a string and prints each character of the string in reverse.
// The function should use an intermediary variable to store each character on each iteration.

function printCharsReverse(str) {
  for (var i = str.length - 1; i >= 0; i -= 1) {
    var cur = str[i];

    console.log(cur); 
  }
}

// printCharsReverse('happy'); // prints : 'y', 'p', 'p', 'a', 'h'
// printCharsReverse('bootcamp'); // prints : 'p', 'm', 'a', 'c', 't', 'o', 'o', 'b'


// **********************************************************************
// Write a function that accepts a character.
// It should return true if the character is a vowel, false otherwise.

function isVowel(char) {
  var vowels = 'aeiou';

  return vowels.indexOf(char) > -1;
}

// console.log(isVowel('a')); // => true;
// console.log(isVowel('i')); // => true;
// console.log(isVowel('t')); // => false;


// **********************************************************************
// Write a function that accepts a string and a target string.
// The function should return true if the target is found in the string, false otherwise.

function isInStr(str, target) {
  if (str.indexOf(target) > -1) {
    return 'target found';
  }

  return 'target not found';
}

// console.log(isInStr('happy', 'p')); // => 'target found';
// console.log(isInStr('happy', 'x')); // => 'target not found';
// console.log(isInStr('happy', 'H')); // => 'target not found';
// console.log(isInStr('happy', 'appy')); // => 'target found';
// console.log(isInStr('123456', '3')); // => 'target found';
// console.log(isInStr('123456', '9')); // => 'target not found';


// **********************************************************************

function firstAndLastSum(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];

  return first + last;
}

// console.log(firstAndLastSum([1, 2, 3, 4])); // => 5 
// console.log(firstAndLastSum([-2, 5, -20, -90, 0])); // => -2


// **********************************************************************
// Write a function that accepts an array and a target.
// Return true if the target exists in the array, false otherwise.
// ** The function should not use indexOf **

function hasTarget(arr, target) {
  for (var i = 0; i < arr.length; i += 1) {
    var ele = arr[i];

    if (target === ele) {
      return true;
    }
  }

  return false;
}

// console.log(hasTarget([2, 'x', 'hi', 9, 10], 'x')); // => true
// console.log(hasTarget([2, 'x', 'hi', 9, 10], 'hi')); // => true
// console.log(hasTarget([2, 'x', 'hi', 9, 10], 'p')); // => false
// console.log(hasTarget([2, 'x', 'hi', 9, 10], '2')); // => false


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return true if a number exists in the string, false otherwise.

function hasANumber(str) {
  var numbers = '0123456789';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (numbers.indexOf(cur) > -1) {
      return true;
    }
  }

  return false;
}

// console.log(hasANumber('trx9j')); // => true;
// console.log(hasANumber('hi there')); // => false;
// console.log(hasANumber('I will go 2 the store')); // => true;


// **********************************************************************
// Write a function that accepts a string and a target as arguments.
// If the target is in the string, the function should return the first index where the target is found.
// If the target does not exist return -1.
// ** You are not allowed to use indexOf **

function myIndexOf(str, target) {
  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (cur === target) {
      return i;
    }
  }

  return -1;
}

// console.log(myIndexOf('happy', 'a')); // => 1
// console.log(myIndexOf('happy', 'p')); // => 2
// console.log(myIndexOf('happy', 'x')); // => -1

// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a string with all the spaces removed.
// You are not allowed to use split or join in this function.

function removeSpaces(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (cur !== ' ') {
      newStr += cur;
    }
  }

  return newStr;
}

// console.log(removeSpaces('I like pizza')); // => 'Ilikepizza'
// console.log(removeSpaces('Hello there how are you today?')); // => 'Hellohowareyoutoday?'

// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a new string with all the vowels removed.
// You are not allowed to use split or join in this function

function removeVowels(str) {
  var newStr = '';
  var vowels = 'aeiou';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) === -1) {
      newStr += cur;
    }
  }

  return newStr;
}

// console.log(removeVowels('happy')); // => 'hppy';
// console.log(removeVowels('lets go to the park')); // => 'lts g t th prk';

// **********************************************************************

