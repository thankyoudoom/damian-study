/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var makeTheGrade = tryRequire('../problems/1_make_the_grade');
var swapSort = tryRequire('../problems/2_swap_sort');
var shiftCipher = tryRequire('../problems/3_shift_cipher');
var stepCipher = tryRequire('../problems/4_step_cipher');


describe('makeTheGrade()', function () {
  it('should convert an array of number grades into an array of leter grades', function () {
    assert.deepEqual(makeTheGrade([95, 83, 92, 68]), ['A', 'B', 'A', 'B']);
    assert.deepEqual(makeTheGrade([81, 59, 37, 100, 93]), ['B', 'C', 'F', 'C', 'C']);
  });
});


describe('swapSort()', function () {
  it('should take an array and return the same array sorted in place', function () {
    assert.deepEqual(swapSort([5, 9, 4, 7, 2]), [2, 4, 5, 7, 9]);
    assert.deepEqual(swapSort([-5, -9, -4, -7, -2]), [-9, -7, -5, -4, -2]);
    assert.deepEqual(swapSort([-50, 50, -25, 25, 0]), [-50, -25, 0, 25, 50]);
  });
});


describe('shiftCipher()', function () {
  it('should convert a string containing groups of characters by their shiftBy number', function () {
    assert.deepEqual(shiftCipher('abc2 abc!2'), 'cde yza');
    assert.deepEqual(shiftCipher('xyz2 xyz!2'), 'zab vwx');
    assert.deepEqual(shiftCipher('czggj5 cqnan!9'), 'hello there');
    assert.deepEqual(shiftCipher('jdzcv9 ivl!8 xa4 qjyyh!9'), 'smile and be happy');
  });
});


describe('stepCipher()', function () {
  it('should return a string generated by swaping all indexes with characters', function () {
    assert.deepEqual(stepCipher('H omTi', [5, 3, 2]), 'Hi Tom'); 
    assert.deepEqual(stepCipher('D veog unip!t', [4, 3, 1]), 'Dont give up!'); 
    assert.deepEqual(stepCipher('Bocm Prtopeap', [8, 6, 7, 4]), 'Bootcamp Prep'); 
    assert.deepEqual(stepCipher('Lntioise fncnoagud  er. ', [7, 4, 2]), 'Learning to code is fun.'); 
  });
});