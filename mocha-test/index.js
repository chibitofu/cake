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

module.exports default isValid;