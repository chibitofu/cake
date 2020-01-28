/*
You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map, where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

  "After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.
*/
const paragraph = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."

function wordCloud(para) {
    let wordCloud = new Map();
    const punctuation = '!"#$%&\'()*+,./:;<=>?@[\\]^_`{|}~';
    const letterArr = para.split('');

    const cleanLetters = letterArr.filter((letter) => {
        return punctuation.indexOf(letter) === -1
    })

    const cleanPara = cleanLetters.join('');
    const wordArr = cleanPara.split(' ');

    wordArr.map((word) => {
        currWord = word.toLowerCase();
        if(wordCloud.get(currWord)) {
            let currVal = wordCloud.get(currWord)
            wordCloud.set(currWord, currVal + 1)
        } else {
            wordCloud.set(currWord, 1);
        }
    })

    const sortedMap = new Map( [...wordCloud.entries()].sort((a,b) => b[1] - a[1]  ) )

    return sortedMap
}

console.log(wordCloud(paragraph))