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

let tempMessage = []
let tempWord = []
for (i = message.length - 1; i >= 0; i--) {
    if (i === 0) {
        tempWord.unshift(message[i])
        tempMessage = tempMessage.concat(tempWord)
    } else if ( message[i] === ' ' ){
        tempWord.push(' ')
        tempMessage = tempMessage.concat(tempWord)
        tempWord = []
    } else {
        tempWord.unshift(message[i])
    }
}

console.log(tempMessage)
console.log(tempMessage.join(''));