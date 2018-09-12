// **********************************************************************
// populationPercentIncrease
//
// You are given an same array of population data objects from the previous problem
// Each object represents a year going back to 1960.
// This time we are interested in the percent increase in population from one year to the next.
// Return an array of sub arrays that contain each year and the population increase from the previous year.
// Note that the final year is 1960 and since we don't have data on 1959 the population increase should be '';
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
//   ...
// ]
//
// populationPercentIncrease(popData);
// => 
// [
//   ['2017', 0.7101955169492661], 
//   ['2016', 0.7316179896327505], 
//   ...
//   ['1962', 1.5262305803643226], 
//   ['1961', 1.6440653053225254], 
//   [ '1960', '' ]
// ]
// **********************************************************************

// The population data is imported from a data file in this folder
var popData = require('./data/population_data');

function populationPercentIncrease(data) {
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = populationPercentIncrease;
