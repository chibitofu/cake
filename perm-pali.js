/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/

// create a dict that stores counts of letter.
// iterate through dict, if more than one value is odd, return false.

function permPali(input) {
    let inputDict = {}
    let isOdd = 0;

    for (let i = 0; i < input.length; i ++) {
        if (inputDict[input[i]]) {
            inputDict[input[i]] += 1
        } else {
            inputDict[input[i]] = 1
        }
    }

    for (const key in inputDict ) {
        if ( inputDict[key] % 2 ) {
            isOdd++
        }
    }

    return isOdd > 1 ? false : true
}

console.log(permPali("civic"), true)
console.log(permPali("ivicc"), true)
console.log(permPali("civil"), false)
console.log(permPali("livci"), false)