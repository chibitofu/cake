/*
I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe.
All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first.
Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
*/

/*
Given all three arrays, write a function to check that my service is first-come, first-served.
All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 3, 5, 4, 6]
would be first-come, first-served.
*/

// first thought is to just conact the two array and then sort them. O(nlogn)

// let takeOut = [1,3,5]
// let dineIn = [2,4,6]

// let served = takeOut.concat(dineIn)

// served.sort((a,b) => {
//     return a - b
// })

// console.log(served)

// if I were to do this in O(n) time I would loop through both arrays.
// push the lower number to a new array and move that index forward.
// once all numbers are gone in an array, push the rest fo the numbers to the answer array.

let takeOut2 = [1,3,5]
let dineIn2 = [2,4,6,10,11]

// will want to keep track of the index of both.

let cafeOrder = (takeOut, dineIn) => {
    let takeOutHead = 0
    let dineInHead = 0
    let answer = []

    while (takeOutHead !== takeOut.length || dineInHead !== dineIn.length) {
        if (takeOut[takeOutHead] < dineIn[dineInHead] || dineInHead === dineIn.length) {
            answer.push(takeOut[takeOutHead])
            takeOutHead++
        } else {
            answer.push(dineIn[dineInHead])
            dineInHead++
        }
    }

    return answer
}

console.log(cafeOrder(takeOut2, dineIn2))