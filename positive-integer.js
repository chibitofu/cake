/* 
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
*/
let testArr1 = [3, 4, -1, 1];
let testArr2 = [1, 2, 0];

let lowerPositiveInteger = (input) => {
    let lowestInt = input[0];
    let nextLowest;
    let minInt = input[0]

    for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            if (minInt > input[i]) {
                minInt = input[i]
            }

            if (lowestInt > input[i]) {
                nextLowest = lowestInt
                lowestInt = input[i]

                if (lowestInt + 1 === nextLowest) {
                    lowestInt = nextLowest
                }
            } else if (nextLowest + 1 >= input[i] || nextLowest === undefined) {
                nextLowest = input[i]

                if (lowestInt + 1 === nextLowest) {
                    lowestInt = nextLowest
                }
            }
        }
    }
    console.log(nextLowest)
    console.log(minInt)
    console.log(lowestInt)
    if (minInt > 1  && minInt + 1 !== nextLowest) {
        return minInt - 1
    } else {
        return lowestInt + 1
    }
}

console.log('test1', lowerPositiveInteger(testArr1))
console.log('test2', lowerPositiveInteger(testArr2))
