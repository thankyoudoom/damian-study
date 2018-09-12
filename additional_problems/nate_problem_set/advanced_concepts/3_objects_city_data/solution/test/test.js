/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var findNewestCity = tryRequire('../problems/1_find_newest_city');
var populationByYears = tryRequire('../problems/2_population_by_years').populationByYears;
var popData = tryRequire('../problems/2_population_by_years').popData;
var populationPercentIncrease = tryRequire('../problems/3_population_percent_increase');

describe('findNewestCity()', function () {
  it('should return array of with the name and population of the newest city', function () {
    var cities1 = [
      { name: 'los_angeles', pop: 3971883, year_founded: 1781},
      { name: 'new_york', pop: 8550405, year_founded: 1624},
      { name: 'houston', pop: 2296224, year_founded: 1837},
      { name: 'philadelphia', pop: 1567442, year_founded: 1682},
      { name: 'chicago', pop: 2720546, year_founded: 1833},
    ];
    assert.deepEqual(findNewestCity(cities1),['houston', 2296224]);

    cities1[2].year_founded = 1600;
    assert.deepEqual(findNewestCity(cities1),['chicago', 2720546]);
  });
});


describe('populationByYears()', function () {
  it("should return an array year and population data", function () {
    assert.deepEqual(populationByYears(popData)[0],[2017, '325,719,178']);
    assert.deepEqual(populationByYears(popData)[1],[2016, '323,405,935']);
  });
});


describe('populationPercentIncrease()', function () {
  it('should return an array of yearly percent population increase', function () {
    assert.deepEqual(populationPercentIncrease(popData)[0], ['2017', 0.7101955169492661]);
    assert.deepEqual(populationPercentIncrease(popData)[1], ['2016', 0.7316179896327505]);
  });
});
