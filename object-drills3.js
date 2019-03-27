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

// Factory functions with LOTR ---------------------------------------------------------------------


function createCharacter(name, nickName, race, origin, attack, defense, weapon){
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        weapon,
        evaluateFight: function(character){
            let damageTaken = character.attack - this.defense;
            let damageGiven = this.attack - character.defense;
            if(damageTaken < 0){
                damageTaken = 0;
            }
            if(damageGiven < 0){
                damageGiven = 0;
            }
            return `Your Opponent takes ${damageGiven} and your receive ${damageTaken} damage`;
        },
        describe: function(){
           return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
        }
    };
    // function describe(){
    //     `${this.name} is a ${this.race} from ${this.origin}`;
    // }
}
const characters = [
    createCharacter('Gandalf the White', 'Gandalf', 'Wizard','Middle Earth', 10, 6, 'Staff'), 
    createCharacter('Bilbo Baggins', 'Bilbo','Hobbit', 'Shire', 2,1,'ring'),
    createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'Shire', 3,2, 'String and Barrow Blade'),
    createCharacter('Aragorn Son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6,8, 'Anduril'),
    createCharacter('Legolas', 'Legolas', 'Elf', 'Mirkwood', 8,5, 'Bow and Arrow'),
    createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 2, 8), 'Hadhafang'
];
const findAragorn = characters.find(function(item){
    return item.nickName === 'Aragorn';
});

const findHobbits = characters.filter(function(item){
    return item.race === 'Hobbit';
});

const fighters = characters.filter(function(item){
    return item.attack > 5;
})
console.log(findAragorn.describe());
//console.log(characters);
// console.log(findHobbits);
//console.log(fighters);