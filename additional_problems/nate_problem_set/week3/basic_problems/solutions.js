// ********************************
// *****   Problems Week 3    *****
// ********************************


// basic problems     (25 problems)


// **********************************************************************
// getAverageScore
// averageScoreFromObjects
// capitalizer
// capitalizeNonVowels
// capitalizeFriends
// charRepeat
// printWithForEach
// builtInEvens
// isOddPredicateFunction
// isGreaterThan10PrediateFunction
// isPrimePredicateFunction
// filterOddNums
// filterEvenWords
// allPositive
// someLargerThan100
// hasWordLongerThan6
// add10ToEach
// countInOrderNums
// largestNum
// largestEven
// printStreaks
// splitEvenArray
// removeVowels
// differentChars
// countVowelsInPlace



// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the average of all numbers.
//
// Examples :
//
// getAverageScore([4, 6, 2, 3]); // => 3.75
// getAverageScore([-23, 82, 4]); // => 21
// **********************************************************************

function getAverageScore(nums) {
  var sum = 0;

  for (var i = 0; i < nums.length; i += 1) {
    sum += nums[i];
  }

  return sum / nums.length;
}


// **********************************************************************
// Write a function that accepts an array of objects as an argument.
// The function should return the average grade found in all objects.
//
// Example :
//
// var grades = [
//   { grade : 80 },
//   { grade : 90 },
//   { grade : 70 },
//   { grade : 80 }
// ];
//
// averageScoreFromObjects(grades); // => 80
// **********************************************************************

function averageScoreFromObjects(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i += 1) {
    curGrade = arr[i].grade;

    sum += curGrade;
  }

  return sum / arr.length;
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a string with all words capitalized.
// Solve this problem by modifying the array in place.
//
// Example :
//
// var str = 'The coW weNt ovEr the moon';
// capitalizer(str); // => 'The Cow Went Over The Moon'
// **********************************************************************

function capitalizer(str) {
  var words = str.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var firstChar = word[0].toUpperCase();
    var rest = word.slice(1);

    words[i] = firstChar + rest;
  }

  return words.join(' ');
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a string with all words that do not begin with a vowel capltalized.
// Solve this problem by modifying the array in place.
//
// Example :
// var str = 
// capitalizeNonVowels('A gooD foOd to eAt'); // => 'a Good Food To eat'
// capitalizeNonVowels('AN APPLE A DAY!'); // => 'an apple a Day!'
// **********************************************************************

function capitalizeNonVowels(str) {
  var words = str.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var firstChar = word[0];
    var rest = word.slice(1);
    var vowels = 'aeiou';

    if (vowels.indexOf(firstChar) > -1) {
      words[i] = firstChar + rest;
    } else {
      words[i] = firstChar.toUpperCase() + rest;
    }
  }
  
  return words.join(' ');
}


// **********************************************************************
// Write a function that accepts a user object as an argument.
// The user object will have a friends key that holds an array of friends.
// The function should return the original object with all the friends caplitalized.
//
// Example :
//
// var user = {
//   name : 'Jill',
//   age : 44,
//   friends : ['marY', 'tOM', 'terry']
// }
//
// capitalizeFriends(user); // => 
//   {
//     name : 'Jill',
//     age : 44,
//     friends : ['Mary', 'Tom', 'Terry']
//   }
// **********************************************************************

function capitalizeFriends(user) {
  var friends = user.friends;

  for (var i = 0; i < friends.length; i += 1) {
    var friend = friends[i];

    friends[i] = friend[0].toUpperCase() + friend.slice(1).toLowerCase();
  }

  return user;
}


// **********************************************************************
// Write a function that accepts a character and a repeater number as an argument.
// The function should return a string with the character repeated by the repeater.
//
// Example :
//
// charRepeat('s', 10); // => 'ssssssssss'
// charRepeat('a', 3); // => 'aaa'
// charRepeat('r', 8); // => 'rrrrrrrr'
// **********************************************************************

// solution 1
function charRepeat(char, num) {
  var newStr = '';

  while (num > 0) {
    newStr += char
  }

  return newStr;
}

// solution 2
function charRepeat(char, num) {
  return char.repeat(num);
}


// **********************************************************************
// Write a function that accepts an array as an argument
// The function should print each element in an array using forEach
// Do not use a for loop, use the built in 'forEach' method
//
// Example :
//
// var arr = [3, 7, 6, 5]
// printWithForEach(arr); // prints : 3, 7, 6, 5
// **********************************************************************

function printWithForEach(arr) {
  arr.forEach(function(ele) {
    console.log(ele);
  }
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return a new array of numbers with all odd numbers removed.
// Try using a built in 'method' to solve this problem.
//
// Example :
// builtInEvens([4, 6, 5, 8, 7, 2]); // => [4, 6, 8, 2]
// builtInEvens([7, 4, 3, 2]); // => [4, 2]
// builtInEvens([-6, -3, -4]); // => [-6, -4]
// **********************************************************************

// solution 1
function builtInEvens(arr) {
  var results = [];

  arr.forEach(function(num) {
    if (num % 2 === 0) {
      results.push(num);
    }
  });

  return results;
}

// solution 2
function builtInEvens(arr) {
  return arr.filter(function(n) {
    return n % 2 === 0;
  });
}


// **********************************************************************
// Write a predicate function that accepts a number as an argument.
// The function should return true if the num is odd, false otherwise.
// Hint : A predicate function is a function that returns a boolean value.
//
// Example :
//
// isOddPredicateFunction(9); // => true;
// isOddPredicateFunction(2); // => false;
// isOddPredicateFunction(3); // => true;
// **********************************************************************

function isOddPredicateFunction(num) {
  return num % 2 === 1;
}


// **********************************************************************
// Write a predicate function that accepts a number as an argument.
// The function should return true if the num is greater than 10, false otherwise.
// Hint : A predicate function is a function that returns a boolean value.
//
// Example :
//
// isGreaterThan10PrediateFunction(9); // => false;
// isGreaterThan10PrediateFunction(20); // => true;
// isGreaterThan10PrediateFunction(10); // => false;
// isGreaterThan10PrediateFunction(-300); // => false;
// **********************************************************************

function isGreaterThan10PrediateFunction(num) {
  return num > 10;
}


// **********************************************************************
// Write a predicate function that accepts a number as an argument.
// The function should return true if the num is a prime number, false otherwise.
// Hint : A predicate function is a function that returns a boolean value.
//
// Example :
//
// isPrimePredicateFunction(2); // => true;
// isPrimePredicateFunction(5); // => true;
// isPrimePredicateFunction(4); // => false;
// isPrimePredicateFunction(-9); // => false;
// **********************************************************************

function isPrimePredicateFunction(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


// **********************************************************************
// Write a function that accepts an array of numbers as an argument.
// The function should return an array of all numbers that are even.
// Use the built in 'filter' function to solve this, do not use a for loop.
// Hint : 
//   pass a predicate function to the built in 'filter' function.
//   it should accept a number as an argument and return a boolean value
//
// Example : 
// filterOddNums([4, 7, 6, 9, 8]); // => [4, 6, 8]
// filterOddNums([-8, 1, -4, 3]); // => [-8, -4]
// **********************************************************************

// solution 1
function filterOddNums(arr) {
  return arr.filter(function(n) {
    return n % 2 === 0;
  });
}

// solution 2
function isEven(n) {
  return n % 2 === 0;
}

function filterOddNums(arr) {
  return arr.filter(isEven);
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return a string of words that are odd in length.
// Use the built in 'filter' function to solve this, do not use a for loop.
//
// Hint : 
//   pass a predicate function to the built in 'filter' function.
//   it should accept a string as an argument and return a boolean value
//
// Example : 
// filterEvenWords('I really like functional programming'); // => 'I programming'
// filterEvenWords('Learning something new is fun'); // => 'something new fun'
// **********************************************************************

// solution 1
function filterEvenWords(str) {
  var results = str.split(' ').filter(function(word) {
    return word.length % 2 === 1;
  })
  
  return results.join(' ');
}

// solution 2
function isOddLength(word) {
  return word.length % 2 === 1;
}

function filterEvenWords(str) {
  return str.split(' ').filter(isOddLength).join(' ');
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if all the numbers are positive, false otherwise.
// Use the built in 'every' function to solve this, do not use a for loop.
//
// Hint : 
//   pass a predicate function to the built in 'every' function.
//   it should accept a number as an argument and return a boolean value
//
// Examples :
// allPositive([5, 4, 6, 7, 8]); // => true
// allPositive([5, 4, 6, 7, -8]); // => false
// **********************************************************************

// solution 1
function allPositive(nums) {
  return nums.every(function(num) {
    return num > 0;
  });
}

// solution 2
function isPositive(num) {
  return num > 0;
}

function allPositive(nums) {
  return nums.every(isPositive); 
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if some of the numbers are larger than 100, false otherwise.
// Use the built in 'some' method to solve this, do not use a for loop.
//
// Hint : 
//   pass a predicate function to the built in 'some' method.
//   it should accept a number as an argument and return a boolean value
//
// Examples :
// someLargerThan100([5, 4, 6, 7, 8]); // => false
// someLargerThan100([5, 400, 6]); // => true
// **********************************************************************

// solution 1
function someLargerThan100(nums) {
  return nums.some(function(num) {
    return num > 100;
  });
}

// solution 2
function largerThan100(num) {
  return num > 100;
}

function someLargerThan100(nums) {
  return nums.some(largerThan100); 
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return true if one of the words is longer than 6, false otherwise.
// Use a built in method to solve this, do not use a for loop.
//
// Examples :
// hasWordLongerThan6('bootcamp prep!'); // => true
// hasWordLongerThan6('The cow jumped over the moon'); // => false
// **********************************************************************

// solution 1
function hasWordLongerThan6(str) {
  return str.split(' ').some(function(word) {
    return word > 6;
  });
}

// solution 2
function longerThan6(word) {
  return word.length > 6;
}

function hasWordLongerThan6(str) {
  return str.split(' ').some(longerThan6); 
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return an new array with all the numbers increased by 10.
// Use the built in 'map' method to solve this, do not use a for loop.
//
// Examples :
// add10ToEach([1, 3, 6]); // => [11, 13, 16]
// add10ToEach([-10, -5, 20]); // => [0, 5, 30]
// **********************************************************************

// solution 1
function add10ToEach(nums) {
  return nums.map(function(num) {
    return num + 10;
  });
}

// solution 2
function add10(num) {
  return num + 10;
}

function add10ToEach(nums) {
  return nums.map(add10); 
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the number of times a number is in order.
// A number is in order if it is less than the next number.
//
// Examples :
// countInOrderNums([1, 2, 3, 4]); // => 3
// countInOrderNums([3, 4, 4, 2, 3, 1]); // => 2
// countInOrderNums([1]); // => 0
// countInOrderNums([]); // => 0
// **********************************************************************

function countInOrderNums(arr) {
  var count = 0;

  for (var i = 0; i < arr.length - 1; i += 1) {
    var cur = arr[i];
    var next = arr[i + 1];

    if (cur < next) {
      count += 1;
    }
  }

  return count;
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the largest even number.
// If there are no even numbers the function should return null.
//
// Examples :
//
// largestNum([3, 4, 6, 7, 8, 3]); // => 8
// largestNum([-10, -3, -7]); // => -3
// largestNum([3]); // => null
// largestNum([]); // => null
// **********************************************************************

function largestNum(arr) {
  var max = null

  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];

    if (max === null || cur > max) {
      max = cur;
    }
  }

  return max;
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the largets even number.
// If there are no even numbers reutrn null.
//
// Examples :
//
// largestEven([3, 4, 6, 7, 8, 31]); // => 8
// largestEven([1, 3, 7]); // => null
// **********************************************************************

function largestEven(nums) {
  var max = null

  for (var i = 0; i < nums.length; i += 1) {
    var cur = nums[i];

    if (cur % 2 === 0) {
      if (max === null || cur > max) {
        max = cur;
      }
    }
  }

  return max;
}


// **********************************************************************
// Write a function that accepts an array of numbers as an argument.
// The function should print all streaks of consecutive even numbers.
// 
// Example : 
//
// printStreaks([1, 2, 3, 4, 6, 10, 3]); // => prints : [2] [4, 6, 10]
// printStreaks([4, 6, 5, 7, 2, 5, 9, 2, 8, 6, 7]); // => prints : [4, 6] [2] [2, 8, 6]
// **********************************************************************

function printStreaks(nums) {
  var curStreak = [];

  for (var i = 0; i < nums.length; i += 1) {
    var cur = nums[i];  

    if (cur % 2 === 0) {
      curStreak.push(cur);
    } else {
      if (curStreak.length > 0) {
        console.log(curStreak); 
      }

      curStreak = [];
    }
  }
}


// **********************************************************************
// Write a function that accepts an array that is even in length as an argument.
// The function should return the original array evenly split into two arrays.
// 
// Example : 
//
// splitEvenArray([1, 2, 3, 4, 6, 10]); // => [[1, 2, 3], [4, 6, 10]]
// splitEvenArray([4, 6, 5, 7, 2, 5, 9, 2, 8, 6]); // => [[4, 6, 5, 7, 2], [5, 9, 2, 8, 6]]
// **********************************************************************

function splitEvenArray(nums) {
  var mid = nums.length / 2;
  var first = nums.splice(0, mid);

  return [first, nums];
}


// **********************************************************************
// Write a function that accepts string as an argument.
// The function should return the string with all vowels shifted by once character.
// Use this string of alpha characters to help simplify your code.
// var alpha = 'abcdefghijklmnopqrstuvwxyz'
//
// Hint :
//   'o' is shifted by one to 'p', 'a' is shifted by one to 'b'
//   'o' -> p, 'a' -> 'b'
//   do not use an if else statement for each of these
//   use the alpha string to shift each index by one
// 
// Example : 
// removeVowels('bootcamp'); // => 'bpptcbmp';
// removeVowels('coding is fun'); // => 'cpdjng js fvn'
// **********************************************************************

function removeVowels(str) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var vowels = 'aeiou';
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) > -1) {
      var curIdx = alpha.indexOf(cur);
      var nextChar = alpha[curIdx + 1];

      newStr += nextChar;
    } else {
      newStr += cur;
    }
  }

  return newStr;
}


// **********************************************************************
// Write a function that accepts a string.
// The function should return the number of different characters in the string.
// Do not include spaces as characters.
// Ignore case.
//
// Hint : 
//   Iterate through the string and record all characters in an object
//   Return the length of the object.
//
// Example :
// 'This is fun' -> 7
//
// t, h, i, s, f, u, n
// these are 7 characters are different (do not count s and i twice
//
// differentChars('abcc'); // => 3
// differentChars('This is fun'); // => 7
// differentChars('I like coding'); // => 9
// **********************************************************************

function differentChars(str) {
  var counts = {};

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i].toLowerCase();

    if (counts[cur] === undefined && cur !== ' ') {
      counts[cur] = true;
    }
  }

  return Object.keys(counts).length;
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The function should return a string with each word replaced with the vowel count of that word.
// Solve this problem by modifying the array in place.
//
// Hint : use a helper function to get the vowel counts of each word
//
// Example :
// countVowelsInPlace('A good food to eat'); // => '1 2 2 1 2'
//
// 'a'    has 1 vowel
// 'good' has 2 vowels
// 'food' has 2 vowels
// 'to'   has 1 vowel
// 'eat'  has 2 vowels
//
// countVowelsInPlace('Lets go to the lake today'); // => '1 1 1 1 2 2'
// countVowelsInPlace('Learning to code is fun!'); // => '3 1 2 1 1'
// **********************************************************************

function countVowelsInPlace(str) {
  var words = str.split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    words[i] = getVowelCount(word);
  }

  return words.join(' ');
}

function getVowelCount(str) {
  var vowels = 'aeiouAEIOU';
  var count = 0;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (vowels.indexOf(cur) > -1) {
      count += 1;
    }
  }

  return count;
}
