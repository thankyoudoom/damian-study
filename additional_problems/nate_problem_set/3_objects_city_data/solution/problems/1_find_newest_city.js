// **********************************************************************
// findNewestCity
//
// You are given an array of city objects.
// Write a function that finds the newest city and returns the cities name and population
//
// Examples :
//
// var cities = [
//   {
//     name: 'los_angeles',
//     pop: 3971883,
//     year_founded: 1781,
//   },
//   {
//     name: 'new_york',
//     pop: 8550405,
//     year_founded: 1624,
//   },
//   {
//     name: 'houston',
//     pop: 2296224,
//     year_founded: 1837,
//   },
//   {
//     name: 'philadelphia',
//     pop: 1567442,
//     year_founded: 1682,
//   },
//   {
//     name: 'chicago',
//     pop: 2720546,
//     year_founded: 1833,
//   },
// ];
//
// findNewestCity(cities) // => ['houston', 2296224] 
// findNewestCity([]) // => null
// **********************************************************************


function findNewestCity(cities) {
  var newCity = null;
  
  for (var i = 0; i < cities.length; i += 1) {
    var city = cities[i];

    if (newCity === null || city.year_founded > newCity.year_founded) {
      newCity = city;
    }
  }

  return [newCity.name, newCity.pop];
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = findNewestCity;
