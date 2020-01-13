// JavaScript is fast when it comes to lots of requests.
// JavaScript is asnyc BUT it's not really async
// It's not really async, because it can only do ONE thing at a time

// 2+2---
// 3+3   ---
// loop 1..1000-------
// const x = 1        -

// C# and Java (eg) ARE async because they are multi-threaded
// 2+2 ---
// 3+3 ---
// Deposit 100
// Withraw 50
// Deposit 100
// Withraw 50
// Deposit 50
// Withraw 100
// Deposit 50
// Withraw 100

// JavaScript IS async in that it is event/callback driven
// JavaScript will run the next line that it can RIGHT NOW. It will not wait
// Blocking (python)
// 2+2 ---
// 3+3    --------
// what was 2 + 2 -
// blocking http/db
// go get all the us States from the db -==- 
// print off the states from the db         --
// in python: go get me the weather from openweathermap --==-
//                                 print off the results     --

// In JavaScript the same thing is different
// go get all the us States from the db -==- 
// print off the states from the db      -- 

//                              issue http  wait for resp  run callback
// go get the weather from owm  -----------===============--------------


// setTimeout(()=>{
//     // code to run
// },1000)

// --==========--

// console.log(1);      ---
// setTimeout(()=>{        -===============--
//     console.log(2);
// },1000)
// setTimeout(()=>{
//     console.log(3);      -   ---
// },0)
// console.log(4);           ---

// 1,3,4,2
// 1,4,3,2 CORRECT

// console.log(1);       ---
// setTimeout(()=>{         --==========---=--
//     console.log(2);
//     setTimeout(()=>{
//        console.log(3);
//        console.log(4)
//     },0)
// },1000)

// dbrequest1
// dbrequst2WhichNeedsDataFromDB1
// dbrequst3WhichNeedsDataFromDB1
// dbrequst4WhichNeedsDataFromDB2

// What is a promise and why should i give a rip?
// == Does a promise make my code faster?
// ===== No. In fact it makes it slower
// Do promises give me new powers?
// Nope. JS is EXACTLY the same.
// Uhhh... why?
// Because you are human. Trying to think like JS as a human, is "head hurt"

// What is a promise?
// All a promise isFinite, is a JS constructor that gives you a few cool methods
// - -- resolve, reject
// - then
// - catch
// - finally
// - all
// - race

// a promise constructor takes 1 arg:
// -- arg 1. Callback
//  -- -- that callback takes 2 args:
//   -- -- -- resolve, reject

// new Promise((resolve, reject)=>{
    
// })

// resolve and reject are created by WHO? 
// The promise constructor makes those.

myFirstPromise = new Promise((resolve, reject)=>{
    console.log("I'm running!")
    console.log("I'm running too!")
    // ajax/db request
    // another ajax request
    // sql
    resolve(data) // TO: outside world. MSG: promise is done...  
    reject(data) // TO: outside world. MSG: something went wrong...  
})
