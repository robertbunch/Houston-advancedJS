// // Callbacks.

// // In JS, functions are first-class objects.
// // You can do almost anything with a function, that you can do with an object
// const sum = (num, num2)=>{
//     return num+num2;
// }

// // console.log(sum)

// function takeAFunction(callback){
//     callback();
// }

// console.log(takeAFunction(sum));

// const calculator = {
//     add: (num, num2)=>{
//             return num+num2;
//         },
// }

// console.log(calculator.add(2,3));

// a(5)(3);
const a = (num)=>{
    return function(num2){
        return num+num2;
    }
}
console.log(a(5)(3));



// function a(num){
//     return function(num2){
//         return num+num2;
//     }
// }


// =============CLOSURE============
// let counter = 0;

// function incrament(){
//     counter++;
// }

// incrament();
// incrament();
// incrament();
// counter = 15;
// incrament();
// console.log(counter);

const incrament = ((initCounter)=>{
    // let counter = 0;
    return ()=>{
        return initCounter++
    }
})

const x = incrament(10);
const y = incrament(-5);

x();
x();
console.log(x())
console.log(x())
console.log(x())

console.log(y())
console.log(y())
console.log(y())




