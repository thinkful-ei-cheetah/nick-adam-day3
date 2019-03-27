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

// iterating over and Objects properties----------------------
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

// Arrays in Objects --------------------------------

const food = {
    meals: ['beakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

//console.log(food.meals[3]);

// Arrays of Objects -----------------------------------
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

//Properties that aren't there------------------------------------------

const people = [
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
        Boss: 'Bill'
    },    
];
