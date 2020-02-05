/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const test1 = "[()]{}{[()()]()}";
const test2 = "[(])";
const test3 = "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]";
const test4 = "";
const test5 = ")";
const test6 = "()";

const testCases = [test1, test2, test3, test4, test5, test6];

// this solution is O(n^2)
// var isValid = function(s) {
//     const charArr = s.split('');
//     const charDict = {")" : "(", "}" : "{", "]" : "["};
//     let checkArr = [];
//     for (let i = 0; i < charArr.length; i++) {
//         const par = charArr[i];
//         if (charDict[par]) {
//             const idx = checkArr.lastIndexOf(charDict[par])
//             if (idx == -1) {
//                 return false
//             } else {
//                 if (idx !== checkArr.length - 1) {
//                     return false
//                 } else {
//                     checkArr.splice(idx, 1);
//                 }
//             }
//         } else {
//             checkArr.push(par)
//         }
//     }
//     return checkArr.length == 0 ? true : false
// };

let isValid = (input) => {
    const parArr = input.split('');
    const parDict = {'(': ')', '[': ']', '{': '}'};
    const stack = [];

    for (let i = 0; i < parArr.length; i++) {
        const par = parArr[i];

        if (par === '(' || par === '[' || par === "{") {
            stack.push(par)
        } else {
            const closePar = stack.pop();
            if (parDict[closePar] !== par) {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false
}

testCases.map(item => console.log(isValid(item)))