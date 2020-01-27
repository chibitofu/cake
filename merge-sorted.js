/* 
    const myArray = [3, 4, 6, 10, 11, 15];
    const alicesArray = [1, 5, 8, 12, 14, 19];

    console.log(mergeArrays(myArray, alicesArray));
    // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

// create pointers for each array to iterate through each.
// compare on each index and push the lower one to an array.
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

let mergeArrays = (arr1, arr2) => {
    let arr1Head = 0;
    let arr2Head = 0;
    let total = [];

    while (arr1Head !== arr1.length || arr2Head !== arr2.length) {
        if (arr1[arr1Head] < arr2[arr2Head] || arr2Head === arr2.length) {
            total.push(arr1[arr1Head])
            arr1Head++
        } else {
            total.push(arr2[arr2Head])
            arr2Head++
        }
    }

    return total
}

console.log(mergeArrays(myArray, alicesArray))