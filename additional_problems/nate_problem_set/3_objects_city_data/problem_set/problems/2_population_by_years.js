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
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  populationByYears : populationByYears,
  popData : popData,
}

