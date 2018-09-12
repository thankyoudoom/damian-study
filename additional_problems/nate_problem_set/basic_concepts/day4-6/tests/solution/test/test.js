/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var getWords = tryRequire('../problems/1_get_words.js');
var getWordsReverse = tryRequire('../problems/2_get_words_reverse.js');
var removeSpaces = tryRequire('../problems/3_remove_spaces.js');
var yellWords = tryRequire('../problems/4_yell_words.js');
var makeEvenLength = tryRequire('../problems/5_make_even_length.js');
var capFirstChar = tryRequire('../problems/6_cap_first_char.js');
var noConsonants = tryRequire('../problems/7_no_consonants.js');
var divisibleBy = tryRequire('../problems/8_divisible_by.js');
var divByThree = tryRequire('../problems/9_div_by_three.js');
var divByThreeOrSeven = tryRequire('../problems/10_div_by_three_or_seven.js');

describe('getWords()', function () {
  it('should return an array of words from a string of words', function () {
    assert.deepEqual(getWords('this is sentence one'),['this', 'is', 'sentence', 'one']);
    assert.deepEqual(getWords('another sentence example'),['another', 'sentence', 'example']);
  });
});


describe('getWordsReverse()', function () {
  it('should return an array of words from a string of words in reverse', function () {
    assert.deepEqual(getWordsReverse('this is sentence one'),['one', 'sentence', 'is', 'this']);
    assert.deepEqual(getWordsReverse('another sentence example'),['example', 'sentence', 'another']);
  });
});


describe('removeSpaces()', function () {
  it('should return a new string with all spaces removed', function () {
    assert.deepEqual(removeSpaces('I like pizza'), 'Ilikepizza');
    assert.deepEqual(removeSpaces('Hello there how are you today?'), 'Hellotherehowareyoutoday?');
  });
});


describe('yellWords()', function () {
  it("should return a string of words with an '!' after each word", function () {
    assert.deepEqual(yellWords('This is fun'), 'This! is! fun!' );
    assert.deepEqual(yellWords('What are you doing?'), 'What! are! you! doing?!' );
  });
});


describe('makeEvenLength()', function () {
  it('should return an array with an even length', function () {
    assert.deepEqual(makeEvenLength([1, 2, 3]), [1, 2, 3, 4]);
    assert.deepEqual(makeEvenLength([5, 6, 7, 8, 9]), [5, 6, 7, 8, 9, 10]);
    assert.deepEqual(makeEvenLength([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
});


describe('capFirstChar()', function () {
  it('should return a string with all the words caplitalized', function () {
    assert.deepEqual(capFirstChar('come one come all'), 'Come One Come All');
    assert.deepEqual(capFirstChar('bootcamp'), 'Bootcamp');
  });
});


describe('noConsonants()', function () {
  it('should return a new string with all consonants removed', function () {
    assert.deepEqual(noConsonants('hello there'), 'eo ee');
    assert.deepEqual(noConsonants('come 1one come all'), 'oe 1oe oe a');
    assert.deepEqual(noConsonants('bootcamp 2000'), 'ooa 2000');
  });
});


describe('divisibleBy()', function () {
  it('should return the first number that the original number is evenly divisbly by', function () {
    assert.deepEqual(divisibleBy(11), 11);
    assert.deepEqual(divisibleBy(10), 2);
    assert.deepEqual(divisibleBy(9), 3);
    assert.deepEqual(divisibleBy(5), 5);
  });
});


describe('divByThree()', function () {
  it('should return an array of numbers less than the max number divisible by three', function () {
    assert.deepEqual(divByThree(10), [ 3, 6, 9 ]);
    assert.deepEqual(divByThree(20), [ 3, 6, 9, 12, 15, 18 ]);
  });
});


describe('divByThreeOrSeven()', function () {
  it('should return an array of numbers less than the max number divisible by three or seven', function () {
    assert.deepEqual(divByThreeOrSeven(10), [ 3, 6, 7, 9 ]);
    assert.deepEqual(divByThreeOrSeven(20), [ 3, 6, 7, 9, 12, 14, 15, 18 ]);
  });
});
