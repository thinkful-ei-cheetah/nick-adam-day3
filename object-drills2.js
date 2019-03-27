'use strict';
function makeStudentsReport(data){
  let anArray = [];
  for (let i = 0; i < data.length; i++){
    //console.log(data[i]);
    anArray.push(`${data[i].name}: ${data[i].grade}`);
  }
  //console.log(anArray);
  return anArray;
}

function enrollInSummerSchool(students){
  const resultArr = [];

  for(let i = 0; i < students.length; i++){
    resultArr.push(Object.assign(students[i],{status: 'In Summer school'}));
  }

  return resultArr;
}

let arr = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

// console.log(enrollInSummerSchool(arr));
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
//   let resultArr = [];

  for(let i=0; i<items.length; i++) {
    if(items[i].id === idNum) {
      return items[i];
    }
  }
}

// console.log(findById(scratchData, 22));

function validateKeys(object, expectedKeys) {
  //object has all and only keys in expectedKeys[]
  const actualKeys = Object.keys(object);
  console.log(actualKeys);
  console.log(expectedKeys);

  if(actualKeys.length !== expectedKeys.length) {
    return false;
  }

  for(let i=0; i<actualKeys.length; i++) {
    if(!expectedKeys.includes(actualKeys[i])) {
      return false;
    }
  }
//   if(actualKeys === expectedKeys) {
//     return true;
//   } else {
//     console.log('im here');
//     return false;
//   }
  return true;
}

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
  
// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const expectedKeys = ['city','id', 'name', 'age'];

console.log(validateKeys(objectA, expectedKeys));