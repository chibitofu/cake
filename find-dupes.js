// given a string return how many duplicate letters there are
// ex baacba = 3

let inputString = 'baacba';
let inputSet = new Set(inputString)
let counter = 0;
let letterDict = {};

for (i = 0; i < inputString.length; i++) {
    if (letterDict[inputString[i]]) {
        counter++
        letterDict[inputString[i]]++
    } else {
        letterDict[inputString[i]] = 1
    }
}

console.log(counter)
console.log(inputString.length - inputSet.size)