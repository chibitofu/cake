/*
Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

const movieTimes = [60, 12, 30, 240, 320, 40, 10]
const flightTime = 380

// function movieWatch(flight, movies) {
//     for (let i = 0; i < movies.length; i++) {
//         for (let j = 0; j < movies.length; j++) {
//             if (i !== j) {
//                 if (movies[i] + movies[j] === flight) {
//                     return true
//                 }
//             }
//         }
//     }

//     return false
// }

// console.log(movieWatch(flightTime, movieTimes))

// do this in O(n) time.
// turn array into a set.
// use set.has() to find if it contains movie time - flight time.
// this might have problems if 2 movies are the same length.

// function setMovie(flight, movie) {
//     const movieSet = new Set(movie)
    
//     for (let i = 0; i < movie.length; i++) {
//         const secondMovieTime = flight - movie[i]
//         if (movieSet.has(secondMovieTime) && movie[i] !== secondMovieTime) {
//             return true
//         }
//     }

//     return false
// }

// console.log(setMovie(flightTime, movieTimes))

// using a dict with indecies as keys.

function dictMovie(flight, movie) {
    let movieDict = {}

    for (let i = 0; i < movie.length; i++) {
        movieDict[movie[i]] = i;
    }

    for (let j = 0; j < movie.length; j++) {
        const secondMovieTime = flight - movie[j]
        
        if (movieDict[secondMovieTime] !== undefined) {
            if (movieDict[secondMovieTime] !== j) {
                return true
            }
        }
    }

    return false
}

console.log(dictMovie(flightTime, movieTimes))