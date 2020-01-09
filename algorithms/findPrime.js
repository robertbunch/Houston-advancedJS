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
const answer = findPrime(500001);
console.timeEnd('findPrime');
console.log(answer);

// =================================================

function bruteForce(n){
    let foundIt = false;
    let lastKnownPrime = 3; //known prime to start on
    let primesKnown = 2; // 3 is 2nd prime
    let currentCheck = 4; // currentNumToCheck
    while (!foundIt){
        let thisOnePrime;
        for(let i = 2; i < currentCheck; i++){
            thisOnePrime = true;
            if(currentCheck % i === 0){
                thisOnePrime = false;
                break
            }
        }
        if(thisOnePrime){
            lastKnownPrime = currentCheck;
            primesKnown++;
        }
        currentCheck++;
        if(primesKnown === n){
            foundIt = true;
        }
    }
    return(lastKnownPrime);
}

console.time('bruteForce');
const bruteAnswer = bruteForce(500001);
console.timeEnd('bruteForce');
console.log(bruteAnswer);