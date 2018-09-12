/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var findMostFrequentChar = tryRequire('../problems/1_find_most_frequent_char_optimized.js');
var validCountStr = tryRequire('../problems/2_valid_count_str_optimized.js');
var sum10 = tryRequire('../problems/3_sum10_optimized.js');
var sum10Distinctive = tryRequire('../problems/4_sum10_distinctive_optimized.js');

describe('findMostFrequentChar()', function () {
  it('should return the most common character in string without nested for loops', function () {
    var str1 = 'afadfbac';
    assert.deepEqual(findMostFrequentChar(str1), 'a');

    var str2 = 'speak less than you know, know more than you show';
    assert.deepEqual(findMostFrequentChar(str2), 'o');
  });
});


describe('validCountStr()', function () {
  it("should return true is the sub string is a valid count of the string wihout nested for loops", function () {
    assert.deepEqual(validCountStr('today is a good day', 't1o3g1'), true);
    assert.deepEqual(validCountStr('today is a good day', 't1o3g2'), false);
    assert.deepEqual(validCountStr('today is a good day', ''), true);
  });
});


describe('sum10()', function () {
  it('should return an array of sub arrays with the indexes of numbers that sum up to 10', function () {
    assert.deepEqual(sum10([1, 6, 3, 7, 9]), [[0, 4], [2, 3], [3, 2], [4, 0]]);
    assert.deepEqual(sum10([-4, 6, -7, 3, 11, 14, -1, 7, -22]), [[0, 5], [3, 7], [4, 6], [5, 0], [6, 4],[7, 3]]);
  });
});


describe('sum10_distinctive()', function () {
  it('should return an array of distinctive sub arrays with the indexes of numbers that sum up to 10', function () {
    assert.deepEqual(sum10Distinctive([1, 6, 3, 7, 9]),[[0, 4], [2, 3]]);
    assert.deepEqual(sum10Distinctive([-4, 6, -7, 3, 11, 14, -1, 7, -22]),[[0, 5], [3, 7], [4, 6]]);
  });
});
