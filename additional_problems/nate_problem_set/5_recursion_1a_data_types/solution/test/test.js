/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var sumOfPrimes = tryRequire('../problems/1_sum_of_primes_recursive.js');
var upperVowels = tryRequire('../problems/2_upper_vowels_recursive.js');
var removeOdds = tryRequire('../problems/3_remove_odds_recursive.js');
var countChars = tryRequire('../problems/4_count_chars_recursive.js');

describe('sumOfPrimes()', function () {
  it('should return the sum of all prime numbers under n recursively', function () {
    assert.deepEqual(sumOfPrimes(11), 28);
    assert.deepEqual(sumOfPrimes(10), 17);
    assert.deepEqual(sumOfPrimes(9), 17);
    assert.deepEqual(sumOfPrimes(8), 17);
    assert.deepEqual(sumOfPrimes(7), 17);
    assert.deepEqual(sumOfPrimes(6), 10);
    assert.deepEqual(sumOfPrimes(5), 10);
    assert.deepEqual(sumOfPrimes(4), 5);
    assert.deepEqual(sumOfPrimes(3), 5);
    assert.deepEqual(sumOfPrimes(2), 2);
    assert.deepEqual(sumOfPrimes(1), 0);
    assert.deepEqual(sumOfPrimes(-10), 0);
  });
});


describe('upperVowels()', function () {
  it("should return a string with all vowels uppercased recursively", function () {
    assert.deepEqual(upperVowels('excellent'), 'ExcEllEnt');
    assert.deepEqual(upperVowels('spectacular'), 'spEctAcUlAr');
  });
});


describe('removeOdds()', function () {
  it('should return an array with all odd numbers removed recursively', function () {
    assert.deepEqual(removeOdds([4, 3, 7, 6, 8, 5]), [4, 6, 8]);
    assert.deepEqual(removeOdds([10, 4, 12, 5, 3, 6, 7, 8]), [10, 4, 12, 6, 8]);
  });
});


describe('countChars()', function () {
  it('should return object with all the freqency counts of a string recursively', function () {
    assert.deepEqual(countChars('mississippi'), { m: 1, i: 4, s: 4, p: 2 });
    assert.deepEqual(countChars('sunny'), { s: 1, u: 1, n: 2, y: 1 });
  });
});
