// Write a function that takes an array of characters and reverses the letters in place.

let inputString = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (i = 0; i < Math.floor(inputString.length / 2); i++) {
    let trailIdx = (inputString.length - 1) - i
    let trailChar = inputString[trailIdx]
    
    inputString[trailIdx] = inputString[i]
    inputString[i] = trailChar
}

console.log(inputString)