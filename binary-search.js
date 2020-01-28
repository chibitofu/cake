// create a binary search tree.
// pick a pivot point, check answer against that.
// if pivot is greater, cut tree in half at pviot and do again on right side.
// if less than, do again on left side.

let searchArr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(item, arr) {
    let pivot = Math.floor(arr.length / 2);
    let headIdx = 0;
    let tailIdx = arr.length -1;
    let currentItem = arr[pivot]

    while (headIdx < tailIdx) {
        if (currentItem === item) {
            return true
        }

        if (item < currentItem) {
            tailIdx = pivot;
            pivot = headIdx + Math.floor(tailIdx / 2)
            console.log(pivot)
        } else {
            headIdx = pivot
            pivot = headIdx + Math.ceil((tailIdx - headIdx) / 2)
            console.log(pivot)
        }

        currentItem = arr[pivot]
    }

    return false
}

console.log(binarySearch(11, searchArr))