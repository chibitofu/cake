// write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

/* const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
*/
let message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

// let tempMessage = []
// let tempWord = []
// for (i = message.length - 1; i >= 0; i--) {
//     if (i === 0) {
//         tempWord.unshift(message[i])
//         tempMessage = tempMessage.concat(tempWord)
//     } else if ( message[i] === ' ' ){
//         tempWord.push(' ')
//         tempMessage = tempMessage.concat(tempWord)
//         tempWord = []
//     } else {
//         tempWord.unshift(message[i])
//     }
// }

// console.log(tempMessage)
// console.log(tempMessage.join(''));

let reverseArr = (messageArr, arrLen) => {
    for (i = 0; i < Math.ceil(arrLen/2); i++ ){
        let tempCurrent = messageArr[i]
        let tailIdx = arrLen - i
        messageArr[i] = messageArr[tailIdx]
        messageArr[tailIdx] = tempCurrent
    }
    console.log(messageArr)
    return unReverse(messageArr)
}


let unReverse = (messageArr)=> {
    let letterCounter = 0
    let lastSpace = 0
    for (i = 0; i < messageArr.length; i++) {
        if ( i === messageArr.length - 1) { 
            letterCounter++
            let arrLen = i - 1
            let wordLength = letterCounter
            for (j = 0; j < Math.ceil(wordLength/2); j++ ){
                let headIdx = lastSpace + j
                let tempCurrent = messageArr[headIdx]
                let tailIdx = arrLen + 1 - j
                messageArr[headIdx] = messageArr[tailIdx]
                messageArr[tailIdx] = tempCurrent
            }   
        }else if (messageArr[i] === ' '){
            let arrLen = i - 1
            let wordLength = letterCounter
            for (j = 0; j < Math.ceil(wordLength/2); j++ ){
                let headIdx = lastSpace + j
                let tempCurrent = messageArr[headIdx]
                let tailIdx = arrLen - j
                messageArr[headIdx] = messageArr[tailIdx]
                messageArr[tailIdx] = tempCurrent
            }
            lastSpace = i + 1
            letterCounter = 0
        } else if (messageArr[i] !== ' ' ) {
            letterCounter++
        }
    }
    return messageArr
}

console.log(reverseArr(message, message.length - 1))