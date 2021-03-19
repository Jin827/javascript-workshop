/**
 * Q) return the nth element of the Fibonacci sequence.
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...]
 */
function fibonacci(n) {

    const array = [1, 1];
    for (i = 0; i < n - 1; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array[n];
}
console.log("fibonacci", fibonacci(10)); // 89

/* with Dynamic Programming
 = Recursion + Stored Data(Memorization)
 => avoid unnecessary recursive steps by storing data. (avoid duplicated work.)
 => intermediate results are stored and re-used.
*/
function dynamicFib(n, memo) {
    let result;

    if (memo[n]) {
        return memo[n];
    }
    if (n === 0 | n === 1) {
        result = 1;
    } else {
        result = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo);
    }

    memo[n] = result;
    return result;
}
console.log('dynamicFib', dynamicFib(10, {}));