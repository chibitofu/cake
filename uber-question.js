// given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]

// first thought is to hardcode it by using 2 loops.
// edge case: empty, not numbers, big int

let firstArr = [1,2,3,4,5]
let productArr = []
for (i = 0; i < firstArr.length; i++) {
    let tempProduct = 1
    for (j = 0; j < firstArr.length; j++) {
        if (i !== j) {
            tempProduct *= firstArr[j]
        }
    }
    productArr.push(tempProduct)
}

console.log(productArr)

// so how can I refactor for it's not O(n2)
// if I multiply all the numbers then divide by the index number, it'll give the answer.
let answerArr = []
let totalProduct = 1
for (i = 0; i < firstArr.length; i++) {
    totalProduct *= firstArr[i]
}
for (j = 0; j < firstArr.length; j++) {
    answerArr.push(totalProduct/firstArr[j])
}
console.log(answerArr)
//this answer is O(2n)
 
// what if you can't use division
// this where I would try to visualize things to try and see a different pattern
// 