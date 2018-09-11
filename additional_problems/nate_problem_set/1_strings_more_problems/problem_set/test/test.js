/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var numFormat = tryRequire('../problems/1_num_format.js');
var timeFormat = tryRequire('../problems/2_time_format.js');

describe('numFormat()', function () {
  it('should return a number with appropriate commas in string format', function () {
    assert.deepEqual(numFormat(100000), '100,000');
    assert.deepEqual(numFormat(234239334), '234,239,334');
    assert.deepEqual(numFormat(1), '1');
    assert.deepEqual(numFormat(129), '129');
    assert.deepEqual(numFormat(12348382938493837487), '12,348,382,938,493,837,000');
  });
});


describe('timeFormat()', function () {
  it("should return a time string with correct number of seconds", function () {
    assert.deepEqual(timeFormat(70), '10');
    assert.deepEqual(timeFormat(250), '10');
    assert.deepEqual(timeFormat(99), '39');
    assert.deepEqual(timeFormat(9), '09');
    assert.deepEqual(timeFormat(1), '01');
  });
});

