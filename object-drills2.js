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
    
}