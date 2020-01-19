/* We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
let answerArr = [];
let headOneIdx = 0;
let headTwoIdx = 0;

while (headOneIdx + headTwoIdx < myArray.length + alicesArray.length) {
    const isMyArrayExhausted = headOneIdx >= myArray.length;
    const isAlicesArrayExhausted = headTwoIdx >= alicesArray.length;
    if (!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[headOneIdx] <= alicesArray[headTwoIdx]))) {
        answerArr.push(myArray[headOneIdx])
        headOneIdx++
    } else {
        answerArr.push(alicesArray[headTwoIdx])
        headTwoIdx++
    }
}

console.log(answerArr)

/* Bonus
What if we wanted to merge several sorted arrays?
Write a function that takes as an input an array of sorted arrays and outputs a single sorted array with all the items from each array.

Do we absolutely have to allocate a new array to use for the merged output?
Where else could we store our merged array? How would our function need to change?
*/

/* Their answer
function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}
*/