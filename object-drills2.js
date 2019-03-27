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
    for(let i = 0: i < students.length: i++){
        Object.assign(students[i],{status: 'In Summer school'});
    }
}
