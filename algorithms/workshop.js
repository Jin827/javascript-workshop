/**
 * Q) return the nth element of the Fibonacci sequence.
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...]
 */ 

function fibonacci(n) {
    let group = [1, 1]; // 1

    for (let i = 0; i < n - 2; i++) {   // 1
        const value = group[i] + group[i +  1]; // n - 1
        group.push(value);  // n - 1
    };

    return group;   // 1
}
// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 2n + 1
// => O(n) => Linear Time Complexity

console.log("fibonacci", fibonacci(10));