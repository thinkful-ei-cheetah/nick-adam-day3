'use strict';
// Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};
//console.log(loaf.hydration());

// iterating over and Objects properties--------------------------------
const fiveProps = {
  foo: 4,
  bar: 'monkey',
  fum: true,
  quux: 89,
  spam: function(){
    return this.foo * this.quux;
  }
};

// for (const key in fiveProps){
//     console.log(`${key}: ${fiveProps[key]}`);
// }

// Arrays in Objects ----------------------------------------------------

const food = {
  meals: ['beakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

//console.log(food.meals[3]);

// Arrays of Objects -------------------------------------------------------
const people = [
  {
    name: 'Rand',
    jobTitle: 'Soldier'
  },
  {
    name: 'Jake',
    jobTitle: 'Monkey handler'
  },
  {
    name: 'Steve',
    jobTitle: 'Engineer'
  },
  {
    name: 'Bill',
    jobTitle: 'CEO'
  },
  {
    name: 'Pat',
    jobTitle: 'Hat maker'
  },    
];

// for(let i = 0; i < people.length; i++){
//     console.log( `${people[i].jobTitle}: ${people[i].name}`);
// }

//Properties that aren't there--------------------------------------------------------------

const people2 = [
  {
    name: 'Rand',
    jobTitle: 'Soldier',
    boss: 'Bill'
  },
  {
    name: 'Jake',
    jobTitle: 'Monkey handler',
    boss: 'Bill'
  },
  {
    name: 'Steve',
    jobTitle: 'Engineer',
    boss: 'Bill'
  },
  {
    name: 'Bill',
    jobTitle: 'CEO'
  },
  {
    name: 'Pat',
    jobTitle: 'Hat maker',
    boss: 'Bill'
  },    
];

// for(let i = 0; i < people2.length; i++){
//   if(!people2[i].boss) {
//     console.log(`${people2[i].jobTitle} ${people2[i].name} doesn't report to anybody`);
//   } else {
//     console.log( `${people2[i].jobTitle} ${people2[i].name} reports to ${people2[i].boss}`);
//   }
// }

//Cracking the code-----------------------------------------------------------------------

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

//craft
function decode(word) {
  let firstLetter = word[0];

  if(cipher[firstLetter]){
    return word[cipher[firstLetter] - 1];
  } else {
    return ' ';
  }
}

// console.log(decode('craft'));
let code = 'craft block argon meter bells brown croon droop';

function decodeWords(codedString) {
  let arrString = codedString.split(' ');
  let arrResult = '';

  for(let i=0; i<arrString.length; i++) {
    arrResult += decode(arrString[i]);
  }

  return arrResult;
}

console.log(decodeWords(code));
