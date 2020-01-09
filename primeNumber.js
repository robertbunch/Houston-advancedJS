function findPrime(n){
    let primeNumbers = [2];
    let i = 3;
    while(primeNumbers.length < n){
        // start with 3, and modules 3 by every number below it except 1.
        // if it ever returns 0, then its not prime.
        // if you get to the end, and it was never 0, push it on to the Array.
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                // not prime!
            }else{
                // prime!
                primeNumbers.push(i);
                break;
            }
        }
        i++;
    }
    return primeNumbers[primeNumbers.length-1];
}

const x = findPrime(5);
console.log(x);


function findPrime(n){
    let knownPrimes = [2,3];
    let i = 4
    while (knownPrimes.length < n){
        let isPrime = true;
        // foreach is inefficient because it can't "break"
        // knownPrimes.forEach((currPrime)=>{ 
        for(let j = 0; j < knownPrimes.length; j++){
            const currPrime = knownPrimes[j];
            if(i % currPrime === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            knownPrimes.push(i)
        }
        i++
    }    
    return knownPrimes.pop()
}

console.time('findPrime');
const answer = findPrime(100001);
console.timeEnd('findPrime');
console.log(answer);

// =================================================

// function bruteForce(n){
//     let foundIt = false;
//     let lastKnownPrime = 3; //known prime to start on
//     let primesKnown = 2; // 3 is 2nd prime
//     let currentCheck = 4; // currentNumToCheck
//     while (!foundIt){
//         let thisOnePrime;
//         for(let i = 2; i < currentCheck; i++){
//             thisOnePrime = true;
//             if(currentCheck % i === 0){
//                 thisOnePrime = false;
//                 break
//             }
//         }
//         if(thisOnePrime){
//             lastKnownPrime = currentCheck;
//             primesKnown++;
//         }
//         currentCheck++;
//         if(primesKnown === n){
//             foundIt = true;
//         }
//     }
//     return(lastKnownPrime);
// }

// console.time('bruteForce');
// const bruteAnswer = bruteForce(500001);
// console.timeEnd('bruteForce');
// console.log(bruteAnswer);