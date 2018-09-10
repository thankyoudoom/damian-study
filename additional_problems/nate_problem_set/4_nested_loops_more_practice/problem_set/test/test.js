/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var mostFrequentChar = tryRequire('../problems/1_most_frequent_char.js');
var validCountStr = tryRequire('../problems/2_valid_count_str.js');
var slidingSub10 = tryRequire('../problems/3_sliding_sub_10.js');
var largestSumOfK = tryRequire('../problems/4_largest_sum_of_k.js');

describe('mostFrequentChar()', function () {
  it('should return array of the index of each peak', function () {
    assert.deepEqual(mostFrequentChar('abbc'), 'b');
    assert.deepEqual(mostFrequentChar('learning to code is fun'), 'n');
    assert.deepEqual(mostFrequentChar(''), '');
  });
});


describe('validCountStr()', function () {
  it('should return array of the index of each peak', function () {
    assert.deepEqual(validCountStr('today is a good day', 't1o3g1'), true);
    assert.deepEqual(validCountStr('today is a good day', 't1o3g2'), false);
    assert.deepEqual(validCountStr('today is a good day', ''), true);
  });
});


describe('slidingSub10()', function () {
  it('should return array of the index of each peak', function () {
    assert.deepEqual(slidingSub10([1, 3, 5, 1, 4, 6, 2]), [[1, 3, 5, 1], [5, 1, 4], [4, 6]]);
    assert.deepEqual(slidingSub10([2, 10, 3, 5, 1, 4]), [[ 10 ], [ 5, 1, 4 ]]);
    assert.deepEqual(slidingSub10([-4, 3, 5, 6, -3, 6, 1]), [[ -4, 3, 5, 6 ], [ 6, -3, 6, 1 ]]);
  });
});


describe('largestSumOfK()', function () {
  it('should return array of the index of each peak', function () {
    assert.deepEqual(largestSumOfK([4, 6, 1, 8, 7, 2, 11], 2), 15);
    assert.deepEqual(largestSumOfK([4, 6, 1, 8, 7, 2, 11], 3), 20);
    assert.deepEqual(largestSumOfK([4, 6, 1, 8, 7, 2, 11], 6), 35);
    assert.deepEqual(largestSumOfK([4, 6, 1, 8, 7, 2, 11], 7), 39);
    assert.deepEqual(largestSumOfK([-4, -6, -1, -8, -7, -2, -11], 3), -11);
    assert.deepEqual(largestSumOfK([], 3), null);
  });
});


