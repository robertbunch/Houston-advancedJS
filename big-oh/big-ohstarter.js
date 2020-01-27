// as the variabile gets bigger, does performance get:
// - much worse
// - worse
// - a little worse
// - stay the same

// Big Oh(1);
function returnFirstElement(arr){
    return arr[0];
}
const arr = [1];
const arr2 = [1,2,34,54,5,345,34,5,534,3,45,35,34,532,34,534];

// Big Oh(5) is really a bigOh(1);
// function returnFirstElement(arr){
    // return arr[0];
    // return arr[1];
    // return arr[2];
    // return arr[3];
    // return arr[4];
// }
// const arr = [1];
// const arr2 = [1,2,34,54,5,345,34,5,534,3,45,35,34,532,34,534];



// Big Oh(n);
console.time("basic loop")
for(let i = 0; i < 10; i++){
    // console.log(i);
}
console.timeEnd("basic loop");

console.time("basic loop")
for(let i = 0; i < 100; i++){
    // console.log(i);
}
console.timeEnd("basic loop");

const arr3 = [1,34,5,6,65,32,12,34,4,6,65];
arr3.forEach((i)=>{

})


// BigOh(n^2)
const n = 100;
for(let i = 0; i < n; i++){
    for(let j = 0; j<n; j++){
        console.log(j*i);
    }
}

// 1 = 1
// 2 = 4
// 3 = 9
// 4 = 16
// 5 = 25
// 6 = 36

// BigOh(2^n)
// recursive solutions
// if you add 1 Number, you double the number of steps required
1 = 2
2 = 4
3 = 8
4 = 16
5 = 32
6 = 64
7 = 128
8 = 256
9 = 512
10 = 1024

BigOh(n!)
// scales completely out of control

BigOh(n^n) 
// Bongo Algorithm = randomly create an Array.
// Randomly create another array and see if they match


BigOh(nLog(n))
// If you double the number of items, it only takes 1 more step
1 = 1
2 = 2
4 = 3
8 = 4
16 = 5
32 = 6
64 = 7
128 = 8

// binary search
// pick a number between 1 - 100
// > 50
// 75
1,2,3,4,5,6,7,8,9,10
        |
         6,7,8,9,10
             |
              9,10