// **********************************************************************
// populationByYears
//
// You are given an array of objects that hold population data.
// Each object represents a year going back to 1960.
// We are only interested in the years and the population count
// Return an array of sub arrays that contain each years, and population formated with commas.
//
// Example :
//
// popData = [
//   { indicator: { id: 'SP.POP.TOTL', value: 'Population, total' },
//     country: { id: 'US', value: 'United States' },
//     value: '325719178',
//     decimal: '0',
//     date: '2017' 
//   },
//   { 
//     indicator: { id: 'SP.POP.TOTL', value: 'Population, total' },
//     country: { id: 'US', value: 'United States' },
//     value: '323405935',
//     decimal: '0',
//     date: '2016' 
//   },
// ]
//
// populationByYears(popData) // => [[2017, 325,719,178], [2016, 323,405,935]] 
// **********************************************************************

// The population data is imported from a data file in this folder
var popData = require('./data/population_data');

function populationByYears(data) {
  var results = [];

  for (var i = 0; i < data.length; i += 1) {
    var curObj = data[i];
    var nextObj = data[i + 1];

    results.push([curObj.date, format(curObj.value)]);
  }

  return results;
}

function format(value) {
  value = String(value);
  var res = [];
  var count = 0;

  for (var i = value.length - 1; i >= 0; i -= 1) {
    var cur = value[i];
    count += 1;

    res.unshift(cur);

    if (count % 3 === 0 && i !== 0) {
      res.unshift(',');
    }
  }

  return res.join('');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  populationByYears : populationByYears,
  popData : popData,
}

