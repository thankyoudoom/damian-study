// ********************************
// *****   Problems Week 3    *****
// ********************************


// basic     (25 problems)
// actual    (36 problems)
// advanced  (17 problems)


// **********************************************************************
// basic
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


// **********************************************************************
// actual
// **********************************************************************


//   objectSize            
//   threeInARow          
//   threeIncreasing     
//   power              
//   reverb            
//   countOfLetter    
//   countRepeats    
//   pairsToString          
//   myForEach      
//   mySelect      
//   myMap        
//   myEvery     
//   mySome     
//   countAdjacentSums      
//   signFlipCount         
//   powerSequence        
//   collapseString      
//   oddWordsOut        
//   hasAllVowels      
//   favoriteWord     
//   mindPsAndQs     
//   commonFactors  
//   commonPrimeFactors    
//   isPassing            
//   variableNameify
//   reverse2D
//   productCallback
//   greaterCallback
//   objectSelect
//   splitHalfArray
//   threeUniqueVowels
//   vowelShift   
//   myFind
//   hasSymmetry
//   totalNumProblems
//   evenSumArray
//   numsToWords



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



// **********************************************************************
// advanced  
// **********************************************************************

// countIndexMod
// mySlice
// objFreqCount
// arrFreqCount
// countLongVowels
// forEachFreqCount
// getOnlineUsers
// findIntersects
// filterPeakFinder
// threeInARowMethod
// hasEveryVowelMethod
// isSortedMethod
// variableNamifyMethod
// capitalizeMethod
// removeVowelMethod
// getSurfingFriends   
// mySplice           


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return the sum of all numbers that have an index evenly divisible by 3.
// 
// Example : 
// countIndexMod([5, 2, 3, 1, 6, 8, 9, 4], 2, 2); // => 15 (5 + 1 + 9)
// countIndexMod([2, 4, 3, 0, 5], 2, 2); // => 2
// countIndexMod([9, 3], 2, 2); // => 9
// **********************************************************************

function countIndexMod(nums) {
  var sum = 0;

  for (var i = 0; i < nums.length; i += 1) {
    var cur = nums[i];

    if (i % 3 === 0) {
      sum += cur;
    }
  }

  return sum;
}


// **********************************************************************
// Write a function that accepts string and two index numbers as arugments.
// The function should return a portion of the string according to the two indexes.
// The first index is the starting index, the second is the endind index (exclisive)
// If the second argument is not specified return the remainder of the string
// Do not nuse .slice() in your solutoin
// 
// Example : 
// mySlice('bootcamp', 2, 5); // => 'otc';
// mySlice('bootcamp', 1); // => 'ootcamp';
// mySlice('bootcamp', 0, 6); // => 'bootc';
// **********************************************************************

function mySlice(str, idx1, idx2) {
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (i >= idx1) {
      if (idx2 === undefined || i < idx2) {
        newStr += cur;
      }
    }
  }

  return newStr;
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an object with the frequency counts of each word.
// The following punctuation should be removed ",.';:?!"
// Caplitalization should be preserved
// 
// Example : 
//
// objFreqCount("The person we saw, saw a saw."); 
//    // => {The: 1, person: 1, we: 1, saw: 3, a: 1}
// objFreqCount('go dog go'); 
//    // => {go: 2, dog: 1}
// **********************************************************************

function objFreqCount(str) {
  var counts = {};
  str = removePunc(str);
  var words = str.split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] += 1;
    }
  }

  return counts;
}

function removePunc(str) {
  var puncs = ",.';:?!";
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (puncs.indexOf(cur) === -1) {
      newStr += cur;
    }
  }

  return newStr;
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an array of sub arrays holding the frequcny counts of each word.
// The following punctuation should be removed ",.';:?!"
// Caplitalization should be preserved
// 
// Example : 
// arrFreqCount("The man we saw, saw a saw."); 
//   // => [['The', 1], ['man', 1], ['we', 1], ['saw', 3], ['a', 1]]
// arrFreqCount('go dog go!'); 
//   // => [['go', 2], ['dog', 1]]
// **********************************************************************

function arrFreqCount(str) {
  var results = [];
  var str = removePuncs(str);
  var words = str.split(' ');

  for (var i = 0; i < words.length; i += 1) {
    var cur = words[i];

    results = insert(cur, results);
  }

  return results;
}

function insert(word, results) {
  for (var i = 0; i < results.length; i += 1) {
    var sub = results[i];

    if (sub[0] === word) {
      results[i][1] += 1;

      return results;
    }
  }

  results.push([word, 1]);
  return results;
}

function removePuncs(str) {
  var puncs = ",.';:?!";
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (puncs.indexOf(cur) === -1) {
      newStr += cur;
    }
  }

  return newStr;
}


// **********************************************************************
// Write a function that accepts a string of words as an argument.
// The function should return the count of words that have more than 2 vowels.
// Use the built in 'forEach' method to solve this.
// 
// Example : 
//
// countLongVowels('bootcamp prep') // => 1
// countLongVowels('It is a beautiful apartment') // => 2
// countLongVowels('I like ice cream'); // => 0 
// **********************************************************************

function countLongVowels(str) {
  var count = 0;
  var words = str.split(' ');

  str.split(' ').forEach(function(word) {
    if (getVowelCount(word) > 2) {
      count += 1;
    }
  });

  return count;
}

function getVowelCount(str) {
  var vowels = 'aeiouAEIOU';
  var count = 0;

  str.split('').forEach(function(char) {
    if (vowels.indexOf(char) > -1) {
      count += 1;
    }
  });

  return count;
}


// **********************************************************************
// Write a function that accepts a string of characters as an argument.
// The function should return an object of frequency counts for each character in the string.
// Spaces and punction should also be counted.
// Use the built in 'forEach' method to solve this.
// 
// Example : 
//
// forEachFreqCount('raccoon'); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
// forEachFreqCount('go dog go'); // => {g: 3, o: 3, ' ': 2, d: 1}
// **********************************************************************

function forEachFreqCount(str) {
  var counts = {};

  str.split('').forEach(function(char) {
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  });
  
  return counts;
}


// **********************************************************************
// Write a function that accepts an array of user objects as an argument.
// The function should return an array of all users that are currently online.
// Use the built in 'filter' method to solve this.
// 
// Example : 
//
// var users = [
//   {
//     name : 'jess',
//     email : 'jess@mail.com',
//     isOnline : true,
//   },
//   {
//     name : 'malcolm',
//     email : 'malcolm@mail.com',
//     isOnline : false,
//   },
//   {
//     name : 'mitch',
//     email : 'mitch@mail.com',
//     isOnline : false,
//   },
//   {
//     name : 'terry',
//     email : 'terry@mail.com',
//     isOnline : true,
//   },
// ]
//
// getOnlineUsers(users); // => [
//   {
//     name : 'jess',
//     email : 'jess@mail.com',
//     isOnline : true,
//   },
//   {
//     name : 'terry',
//     email : 'terry@mail.com',
//     isOnline : true,
//   },
// ]
// **********************************************************************

// solution 1
function getOnlineUsers(arr) {
  return arr.filter(function(user) {
    return user.isOnline;
  });
}

// solution 2
function isOnline(user) {
  return user.isOnline;
}

function getOnlineUsers(arr) {
  return arr.filter(isOnline);
}


// **********************************************************************
// Write a function that accepts two arrays of numbers.
// The function should return an array of all numbers that are found in both arrays.
// Use the built in 'filter' method to solve this.
// 
// Example : 
//
// findIntersects([2, 4, 6], [2, 3, 4]); // => [2, 4];
// findIntersects([2, 4, 6], []); // => [];
// findIntersects([2], [2]); // => [2];
// **********************************************************************

// solution 1
function findIntersects(arr1, arr2) {
  return arr1.filter(function(n) {
    return arr2.indexOf(n) > -1;
  });
}

// solution 2
function findIntersects(arr1, arr2) {
  function search(n) {
    return arr2.indexOf(n) > -1;
  }

  return arr1.filter(search);
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return an array of numbers that represent a peaks.
//
// A peak is when an number is larger than the number before it and after it.
// [1, 3, 1] (3 is a peak)
//
// if there is no previous number, the current number needs to be larget than the next number.
// [3, 1] (3 is a peak)
//
// if there is no next number, the current number needs to be larget than the previous number.
// [3, 9] (9 is a peak)
//
// Try solving this with a for loop and using the built in 'filter' method.
// All arrays will be at least 2 in length
// 
// Example : 
// filterPeakFinder([1, 2, 1, 3, 5, 2]); // => [2, 5]
// filterPeakFinder([5, 4, 3, 6, 5]); // => [5, 6]
// filterPeakFinder([1, 2, 3, 4]); // => [4]
// filterPeakFinder([4, 3, 2, 1]); // => [4]
// **********************************************************************

// solution 1
function filterPeakFinder(arr) {
  return arr.filter(function(n, i) {
    var prev = arr[i - 1];
    var cur = arr[i];
    var next = arr[i + 1]

    if (!prev && cur > next) {
      return true;
    }

    if (!next && cur > prev) {
      return true;
    }

    if (cur > prev && cur > next) {
      return true;
    }
  });
}

// solution 2
function filterPeakFinder(arr) {
  var peaks = [];

  for (var i = 0; i < arr.length; i += 1) {
    var prev = arr[i - 1];
    var cur = arr[i];
    var next = arr[i + 1];

    if (!prev && cur > next) {
      peaks.push(cur);
    } else if (!next && cur > prev) {
      peaks.push(cur);
    } else if (cur > prev && cur > next) {
      peaks.push(cur);
    }
  }

  return peaks;
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if the same number is repeated 3 times in a row, false otherwise.
// Use a built in method in your solution do not use a for loop.
// 
// Example : 
// threeInARowMethod([4, 3, 7, 7, 7, 13, 8]); // => true;
// threeInARowMethod([7, 7, 7]); // => true;
// threeInARowMethod([6, 6]); // => false;
// threeInARowMethod([10, 9, 20, 33, 3, 3]); // => false;
// **********************************************************************

function threeInARowMethod(arr) {
  return arr.some(function(cur, i) {
    var prev = arr[i - 1];
    var next = arr[i + 1];

    if (prev === cur && cur === next) {
      return true;
    }
  });
}


// **********************************************************************
// Write a function that accepts a string as an argument.
// The funtion should return true if every vowel exists in the string, false otherwise.
// Use a built in method in your solution do not use a for loop.
//
// Examples :
//
// hasEveryVowelMethod('education'); // => true
// hasEveryVowelMethod('coding is fun'); // => false
// **********************************************************************

function hasEveryVowelMethod(str) {
  return 'aeiou'.split('').every(function(ele) {
    return str.indexOf(ele) > -1;
  });
}


// **********************************************************************
// Write a function that accepts an array of numbers.
// The function should return true if the numbers are sorted, false otherwise.
// The solution should use a built in method.
// 
// Examples : 
// isSortedMethod([1, 2, 3, 4]); // => true;
// isSortedMethod([1, 2, 2, 3]); // => true;
// isSortedMethod([-2, 0, 3]); // => true;
// isSortedMethod([0, -1]); // => false;
// isSortedMethod([-10, -4, -9]); // => false;
// isSortedMethod([-10, -4, 0, 11, 22, 90]); // => true;
// **********************************************************************

// solution 1
function isSortedMethod(arr) {
  return arr.every(function(cur, i) {
    var next = arr[i + 1];

    if (!next) {
      return true;
    }

    return cur <= next;
  });
}

// solution 2
function curLessThanNext(cur, i, arr) {
  var next = arr[i + 1];
  return next === undefined || cur <= next;
}

function isSortedMethod(arr) {
  return arr.every(curLessThanNext);
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return the string of words coverted to camel case.
// The solution should use a built in method, do not use a for loop.
// 
// Examples : 
//
// variableNamifyMethod('bootcamp prep'); // => 'bootcampPrep'
// variableNamifyMethod('I likE coDiNg'); // => 'iLikeCoding'
// variableNamifyMethod('Variable nameify map'); // => 'variableNameifyMap'
// **********************************************************************

function variableNamifyMethod(str) {
  return str.split(' ').map(function(word, i) {
    var word = word.toLowerCase();

    if (i > 0) {
      var firstChar = word[0].toUpperCase();
      return firstChar + word.slice(1);
    } else {
      return word;
    }
  }).join('');
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return an new string with all the words uppercased
// Use a built in method to solve this, do not use a for loop.
//
// Examples :
// capitalizeMethod('The cow, juMpeD OvEr the moon.'); // => 'The Cow Jumped Over The Moon'
// capitalizeMethod('bootcamp'); // => 'Bootcamp!'
// **********************************************************************

// solution 1
function capitalizeMethod(str) {
  var results = str.split(' ').map(function(word) {
    var firstChar = word[0].capitalizeMethod();
    var rest = word.slice(1).toLowerCase();

    return firstChar + rest;
  });
  
  return results.join(' ');
}

// solution 2
function upperCase(word) {
  var firstChar = word[0].capitalizeMethod();
  var rest = word.slice(1).toLowerCase();

  return firstChar + rest;
}

function capitalizeMethod(str) {
  return str.split(' ').map(upperCase).join(' '); 
}


// **********************************************************************
// Write a function that accepts a string of words.
// The function should return the string with all the vowels removed.
// The solution should use a built in method
// 
// Examples : 
//
// removeVowelMethod('Icecream'); // => 'ccrm'
// removeVowelMethod('Bootcamp prep'); // => 'btcmp prp'
// **********************************************************************

function removeVowelMethod(str) {
  var vowels = 'aeiouAEIOU';

  return str.split('').filter(function(cur) {
    return vowels.indexOf(cur) === -1;
  }).join('');
}


// **********************************************************************
// Write a function that accepts a user string and an allUsers array of user objects.
// The function should return an array of all the friend objects of the user who likes to surf.
// 
// Examples : 
//
// var allUsers = {
//   terry : {
//     email: 'terry@mail.com',
//     friends: ['blake', 'jess', 'malcolm'],
//     likeSurfing : true,
//   },
//   liz : {
//     email: 'terry@mail.com',
//     friends: ['jess', 'malcolm'],
//     likeSurfing : false,
//   },
//   blake : {
//     email: 'terry@mail.com',
//     friends: ['liz', 'jess', 'terry'],
//     likeSurfing : true,
//   },
//   jess : {
//     email: 'terry@mail.com',
//     friends: ['blake', 'terry', 'liz', 'blake'],
//     likeSurfing : false,
//   },
//   malcolm : {
//     email: 'terry@mail.com',
//     friends: ['terry', 'jess', 'liz'],
//     likeSurfing : true,
//   },
// };
//
// getSurfingFriends(allUsers, 'terry'); // => ['blake', 'malcolm']
// getSurfingFriends(allUsers, 'liz'); // => ['malcolm']
// getSurfingFriends(allUsers, 'blake'); // => ['terry']
// getSurfingFriends(allUsers, 'jess'); // => ['blake', 'terry']
// getSurfingFriends(allUsers, 'malcolm'); // => ['terry']
// **********************************************************************

function getSurfingFriends(users, userName) {
  var friends = users[userName].friends;

  return friends.filter(function(name) {
    return users[name].likeSurfing;
  });
}


// **********************************************************************
// Write a function that accepts an array, a starting index and count as arguments.
// The function should return a portion of the array according to start and count.
// The first index is the starting index, the second is the number of elements to return.
// If the second argument is not specified return the remainder of the array.
// **This function should mutate the original array**
// 
// Example : 
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 2, 2); // => ['t', 'a'];
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 1); // => ['u', 't', 'a', 't', 'e'];
// mySplice(['m', 'u', 't', 'a', 't', 'e'], 0, 4); // => ['m', 'u', 't', 'a'];
// **********************************************************************

function mySplice(arr, startIdx, count) {
  var save = [];
  var removedElements = [];

  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];

    if (i >= startIdx) {
      if (removedElements.length < count || count === undefined) {
        removedElements.push(cur);
      } else {
        save.push(cur);
      }
    }
  }

  while (arr.length > startIdx) {
    arr.pop();
  }

  while (save.length > 0) {
    arr.push(save.shift());
  }

  return removedElements;
}



