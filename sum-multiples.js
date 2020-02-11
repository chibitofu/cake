// Calculate sum of multiples of 3 and 5 between 0 and n.
// eg. n = 20; 3+5+6+9+10+12+15+18+20 ouput = 98

const sumMultiples = (input) => {
    let sum = 0;
    for (let i = 0; i <= input; i++) {
        if (i % 5 === 0) {
            sum += i;
        } else if (i % 3 === 0) {
            sum += i;
        } 
    }

    return sum;
}

console.log(sumMultiples(20));