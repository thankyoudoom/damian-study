// **********************************************************************
// Write a function that accepst a string of words as an argument.
// The function should return an array of words found in the string.

function getWords(str) {
  return str.split(' ');
}

// console.log(getWords('this is sentence one')) // => ['this', 'is', 'sentence', 'one']
// console.log(getWords('another sentence example')) // => ['another', 'sentence', 'example'] 


// **********************************************************************
// Write a function that accepst a string of words as an argument.
// The function should return an array of words found in the string in reverse.

function getWordsReverse(str) {
  var results = [];
  var words = str.split(' ');

  for (var i = words.length - 1; i >= 0; i -= 1) {
    var word = words[i];

    results.push(word);
  }

  return results;
}

// console.log(getWordsReverse('this is sentence one')) // => ['one', 'sentence', 'is', 'this']
// console.log(getWordsReverse('another sentence example')) // => ['example', 'sentence', 'another'] 


// **********************************************************************
// Write a function that accepts a string of words as an argument.
// The function should return a new string with all the spaces removed.
// ** The function should not use any loops or iteration **

function removeSpaces(str) {
  return str.split(' ').join('');
}

// console.log(removeSpaces('I like pizza')); // => 'Ilikepizza'
// console.log(removeSpaces('Hello there how are you today?')); // => 'Hellotherehowareyoutoday?'


// **********************************************************************
// Write a function that accepts a string of words as an argument.
// The function should return a string with an '!' after each word.
// ** The function should not use any loops or iteration **

function yellWords(str) {
  return str.split(' ').join('! ') + '!';
}

// console.log(yellWords('This is fun')); // => 'This! is! fun!' 
// console.log(yellWords('What are you doing?')); // => 'What! are! you! doing?!' 


// **********************************************************************
// Write a function that accepts an array as an argument.
// If the array holds an odd number of elements, add another number to the array.
// The new number should be the last value in the array plus 1.
// Return the even length array.

function makeEvenLength(arr) {
  if (arr.length % 2 === 0) {
    return arr;
  }

  var last = arr[arr.length - 1];
  arr.push(last + 1);

  return arr;
}

// console.log(makeEvenLength([1, 2, 3])); // => [1, 2, 3, 4]
// console.log(makeEvenLength([5, 6, 7, 8, 9])); // => [5, 6, 7, 8, 9, 10]
// console.log(makeEvenLength([1, 2, 3, 4])); // => [1, 2, 3, 4]


// **********************************************************************
// Write a function that accepts a string of words as an argument.
// The function should return a new string with all the words caplitalized.

function capFirstChar(str) {
  var words = str.split(' ');
  var results = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var first = word[0].toUpperCase();
    var rest = word.slice(1);

    results.push(first + rest);
  }

  return results.join(' ');
}

// console.log(capFirstChar('come one come all')); // => 'Come One Come All'
// console.log(capFirstChar('bootcamp')); // => 'Bootcamp'


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a new string with all consonants removed.
// There will be no uppercase characters

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

// console.log(noConsonants('hello there')); // => 'eo ee'
// console.log(noConsonants('come 1one come all')); // => 'oe 1oe oe a'
// console.log(noConsonants('bootcamp 2000')); // => 'ooa 2000'


// **********************************************************************
// Write a function that accepts a number.
// The function should return the first number that the original number is evenly divisbly by.
// Do not include 1 as an evenly divisible number.

function divisibleBy(num) {
  for (var i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      return i;
    }
  }
}

// console.log(divisibleBy(11)); // => 11
// console.log(divisibleBy(10)); // => 2
// console.log(divisibleBy(9)); // => 3
// console.log(divisibleBy(5)); // => 5


// **********************************************************************
// Write a function that accepts a max number as an argument.
// The function should return an array of numbers less than the max number.
// The array should only include numbers evenly divisible by 3, excluding 0.

function divByThree(max) {
  var results = [];

  for (var i = 3; i < max; i += 1) {
    if (i % 3 === 0) {
      results.push(i);
    }
  }

  return results;
}

// console.log(divByThreeOrSeven(10)); // => [ 3, 6, 9 ]
// console.log(divByThreeOrSeven(20)); // => [ 3, 6, 9, 12, 15, 18 ]
 
// **********************************************************************
// Write a function that accepts a max number as an argument.
// The function should return an array of numbers less than the max number.
// The array should only include numbers evenly divisible by 3 or 7, excluding 0.

function divByThreeOrSeven(max) {
  var results = [];

  for (var i = 3; i < max; i += 1) {
    if (i % 3 === 0 || i % 7 === 0) {
      results.push(i);
    }
  }

  return results;
}

// console.log(divByThreeOrSeven(10)); // => [ 3, 6, 7, 9 ]
// console.log(divByThreeOrSeven(20)); // => [ 3, 6, 7, 9, 12, 14, 15, 18 ]
 
// **********************************************************************
