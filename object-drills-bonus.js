'use strict';

// BONUS: A Database Search -------------------------------------------

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  return arr.find((element) => {
    // compare element to query for exact match (key/value)
    // see if all keys in query exist in element
    // if all keys exist..see if values match element[key](element's value)
    //    then return element
    //    else return null
    const queryKeys = Object.keys(query);
    const elementKeys = Object.keys(element);
    let found = false;

    

    return element.id === 6;    
  });
}

console.log(findOne(HEROES, { id: 1, name:'Aquaman' }));