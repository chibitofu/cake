// takes in an array of unsorted scores
// the highest possible score in game
// returns a sorted array of scores in less than O(n log n)

/*
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
returns [91, 89, 65, 53, 41, 37]
*/

// keep track of second highest score
// keep track of lowest score
// iterate through once and toss left and right with pivot of 50
// use while loop to compare to 100
// find next highest, then continue while loop till array is empty


let scoreArr = [37, 89, 41, 65, 91, 53 , 10, 10, 10, 10];
let highestPossible = 100;

function sortHighest(scores, highScore) {
    let nextHighest = scores[0];
    let idx = 1;
    let highScoreSorted = [];
    let highestIdx;
    while(scores.length > 0) {
        if (scores[idx]  > nextHighest) {
            nextHighest = scores[idx];
            highestIdx = idx;
        }

        idx++
        if (idx === scores.length) {
            highScoreSorted.push(nextHighest);
            scores.splice(highestIdx, 1);
            nextHighest = 0;
            idx = 0;
        }
    }

    return highScoreSorted
}

console.log(sortHighest(scoreArr, highestPossible))