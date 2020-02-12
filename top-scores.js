/* 
Write a function that takes:
an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n log n) time.
*/

/*
example
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
returns [91, 89, 65, 53, 41, 37]
*/

function highScore(unsortedScores, HIGHEST_POSSIBLE_SCORE) {
    if (HIGHEST_POSSIBLE_SCORE === undefined) {
        return new TypeError('HIGHEST_POSSIBLE_SCORE is undefined').message;
    } else if (unsortedScores === undefined) {
        return new TypeError('unsortedScores is undefined').message;
    } else if (HIGHEST_POSSIBLE_SCORE < 1) {
        return new Array(unsortedScores.length).fill(0);
    }

    let scoreArr = new Array(HIGHEST_POSSIBLE_SCORE + 1);
    let sortedScores = [];

    for (let i = 0; i < unsortedScores.length; i++) {
        const score = unsortedScores[i];
        if (scoreArr[score]) {
            scoreArr[score] += 1;
        } else {
            scoreArr[score] = 1;
        }
    }

    for (let i = 0; i < scoreArr.length; i++) {
        let score = scoreArr[i];
        if (score) {
            while (score > 0) {
                sortedScores.unshift(i);
                score--;
            }
        }
    }
    
    return sortedScores
}

console.log(highScore([37, 89, 41, 65, 91, 53], 100));
console.log(highScore([37, 89, 41, 65, 91, 53, 47, 37, 37, 100], 100));
console.log(highScore([37, 89, 41, 65, 91, 53], 0));
console.log(highScore([37, 89, 41, 65, 91, 53]));
console.log(highScore(undefined, 0));
console.log(highScore([0], 100));