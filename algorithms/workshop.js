/**
 * Q) return the nth element of the Fibonacci sequence.
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...]
 */ 

function fibonacci(n) {
    let group = [1, 1];

    for (let i = 0; i < n - 2; i++) {
        const value = group[i] + group[i +  1];
        group.push(value);
    };

    return group;
}

console.log("fibonacci", fibonacci(10));