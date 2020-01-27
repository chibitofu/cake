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

// I would start by combing take out and dine in, sort that array then compare it with served

let takeOut = [1, 3, 5]
let dineIn = [2, 4, 6]
let servedOrders = [1, 2, 3, 5, 4, 6]

let takeOut2 =  [1, 3, 5]
let dineIn2 = [2, 4, 6]
let servedOrders2 = [1, 2, 4, 6, 5, 3]

let takeOut3 =  []
let dineIn3 = [2, 4, 6]
let servedOrders3 = [2, 4, 6]

// misread the expected, starting over
// function checkOrder(take, dine, served) {
//     let combined = take.concat(dine)
//     combined.sort((a,b) => a - b)

//     for (let i = 0; i < combined.length; i++) {
//         if(served[i] !== combined[i]) {
//             console.log(served, combined)
//             return false
//         } 
//     }

//     return true
// }

function orderChecker(take, dine, serve) {
    let dineIdx = 0;
    let takeIdx = 0;

    for (let i = 0; i < serve.length; i++) {
        if (serve[i] === dine[dineIdx]) {
            dineIdx++
        } else if (serve[i] === take[takeIdx]) {
            takeIdx++
        } else {
            return false
        }
    }

    if (dineIdx !== dine.length || takeIdx !== take.length) {
        return false
    }

    return true
}

console.log(orderChecker(takeOut, dineIn, servedOrders), true)
console.log(orderChecker(takeOut2, dineIn2, servedOrders2), false)
console.log(orderChecker(takeOut3, dineIn3, servedOrders3), true)