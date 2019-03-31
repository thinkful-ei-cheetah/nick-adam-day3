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
  const queryKeys = Object.keys(query);
  if(!queryKeys) return null;

  const found = arr.find((element) => {
    // compare element to query for exact match (key/value)
    // see if all keys in query exist in element
    // if all keys exist..see if values match element[key](element's value)
    //    then return element
    //    else return null
    for(let i=0; i<queryKeys.length; i++) {
      if(element[queryKeys[i]] !== query[queryKeys[i]]) return false;
    }
    return true;
  });

  return found || null;
}

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));