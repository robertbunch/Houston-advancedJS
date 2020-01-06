// const/let

// x = 3
// console.log(typeof(x))
// 95 - Java, PHP, Ruby, Apache, Cold Fusion, (Python 91)
// compiled languages = java, c#, c, COBOL, C++, 
// -- BEFORE the program is run
// run-time languages - JavaScript, PHP, Ruby, Python
// -- WHEN the program is run

// Node.js = runtime

// var x = 3;
// HOISTING - JS will look for 
// for any variable declaration in a block
// and DECLARE that at the top of the block
// function sum(y){
//   var result = y+x;
//   var x = 10;
//   result = y+x;
//   return result;
// }
// console.log(sum(5));

// var i;
// for(i = 0; i < 10; i++){
//   console.log(i)
// }
// console.log(i)

// const, let
// let = block scoped variable

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }
// console.log(i)

// let x = 3;
// function sum(y){
//     let result = y+x;
//     let x = 10;
//     return result;
// }
// console.log(sum(5));

// const x = 3;
// x = 4;
// console.log(x)

// const obj = {
//     name: "Rob",
//     profession: "teacher",
// }
// obj.age = 41;

const person = {
    name: "Rob",
    langauge: "JavaScript",
}

const steven = person;
steven.name = "Steven";

console.log(person);
console.log(steven);

const sports = ['nba','pga','nfl','mlb'];
const sports2020 = sports;
sports.push('MLS');
console.log(sports)
console.log(sports2020)

const x = 3;
const x2 = new Number(3);
x = 4;





