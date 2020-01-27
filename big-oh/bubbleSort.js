// sorting algorithms
// - take an unsorted list and sort it
// how fast can you do it?

// const unsortedArray = [1,5,2,9,6,32,7,4];
const bestCaseArray = [1,2,3,4,5,6,7];
const worstCaseArray = [7,6,5,4,3,2,1];

function bubbleSort(arr){
    // check the 1st number and the 2nd
    // if the 1st is bigger, switch!
    // go to the next and check 2 and 3
    // if 2 is bigger, switch!
    for(let i = 0; i < arr.length; i++){
        // a modified bubbleSort, checks to see if the list is in order each time through
        // a modified bubbleSort, also runs j-i times becuause we know the last i letters are in order
        let inOrder = true;
        for(let j = 0; j < arr.length-i; j++){
            const currentIndex = j;
            const nextIndex = j+1;
            if(arr[currentIndex] > arr[nextIndex]){
                let temp = arr[currentIndex];
                arr[currentIndex] = arr[nextIndex];
                arr[nextIndex] = temp;
                //we had to make a switch. we dont know if the list is in order any more
                inOrder = false;
            }
        }
        console.log(inOrder);
        if(inOrder){
            break;
        }
        console.log(arr);
    }
}

console.log(bubbleSort(worstCaseArray));

// init - [1,5,2,9,6,32,7]
// 1 - [1,5,2,9,6,32,7]
// 2 - [1,2,5,9,6,32,7]
// 3 - [1,2,5,9,6,32,7]
// 4 - [1,2,5,6,9,32,7]
// 5 - [1,2,5,6,9,32,7]
// 6 - [1,2,5,6,9,7,32]

// init - [1,2,5,6,9,7,32]
// 1 - [1,2,5,6,9,7,32]
// 2 - [1,2,5,6,9,7,32]
// 3 - [1,2,5,6,9,7,32]
// 4 - [1,2,5,6,9,7,32]
// 5 - [1,2,5,6,7,9,32]
// 6 - [1,2,5,6,7,9,32]


console.log([1,56,2,9,43,456,452,564,6,23,45234,5,3,54657,36,34,523,543,2].sort())



