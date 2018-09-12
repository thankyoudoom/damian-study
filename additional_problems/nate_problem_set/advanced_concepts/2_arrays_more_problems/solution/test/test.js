/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var sumPointers = tryRequire('../problems/1_sum_pointers.js');
var swapOrder = tryRequire('../problems/2_swap_order.js');

describe('sumPointers()', function () {
  it('should return an array with each two number pair summed together', function () {
    assert.deepEqual(sumPointers([1, 2, 3, 4, 5, 6]), [3, 7, 11]);
    assert.deepEqual(sumPointers([2, 5, 6, 4, 3, 2, 3, 4, 9, 3]), [7, 10, 5, 7, 12]);
    assert.deepEqual(sumPointers([]), []);
  });
});


describe('swapOrder()', function () {
  it("should return an array of numbers sorted in order", function () {
    assert.deepEqual(swapOrder([1, 3, 2]), [1, 2, 3]);
    assert.deepEqual(swapOrder([1, 4, 3, 5, 6, 8, 7, 9]), [1, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(swapOrder([1, 8, 4, 7]), [1, 4, 7, 8]);
  });
});
