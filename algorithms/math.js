/**
 * Q) return the nth element of the Fibonacci sequence.
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...]
 */
/* with Bottom-Up Approach */
function fibonacci(n) {
    let group = [1, 1]; // 1
    for (let i = 0; i < n - 1; i++) {   // 1
        const value = group[i] + group[i + 1]; // n - 1
        group.push(value);  // n - 1
    };
    return group[n];   // 1
}
// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 2n + 1
// => O(n) => Linear Time Complexity
console.log("fibonacci", fibonacci(10));

/* with Recursion */
let counter = 0;
function recursiveFib(n) {
    counter++;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return recursiveFib(n - 1) + recursiveFib(n - 2);
    }
}
// O(2^n) => Exponential Time Complexity => Recursion is Not always best!
console.log('recursiveFib', recursiveFib(10), counter);
counter = 0;
console.log('recursiveFib', recursiveFib(10), counter);
counter = 0;

/* with Dynamic Programming 
 = Recursion + Stored Data(Memorization)
 => avoid unnecessary recursive steps by storing data. (avoid duplicated work.)
 => intermediate results are stored and re-used.
*/
function dynamicFib(n, memo) {
    let result;
    counter++;

    if (memo[n]) {
        // if memo already has 'n' value, do not execute 'dynamicFib()' again. 
        return memo[n];
    }
    if (n === 0 || n === 1) {
        result = 1;
    } else {
        console.log(`Recursioning.. [${n}] ${JSON.stringify(memo)}`);
        result = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo);

    }

    // after recursion
    console.log(`result [${n}] ${result}`,);
    // n => 2
    // result = dynamicFib(2-1) + dynamicFic(2-2) = dynamicFib(1) + dynamicFic(0) = 1 + 1 = 2
    // n => 3
    // result = dynamicFib(3-1) + dynamicFic(3-2) = dynamicFib(2) + dynamicFic(1) = 2 + 1 = 3

    memo[n] = result;
    return result;
}
// T = 2n => O(n)
console.log('dynamicFib', dynamicFib(10, {}), counter);
counter = 0;


/**
 * Q) Determine whether an input number is a prime number(소수).
 * isPrime(9); // false
 * isPrime(5); // true
 * *약수의 중심(루트 n)을 기준으로, 자기자신을 제외하고 중시을 초과하는 숫자에서 나눴을때 나머지가 0이되는 숫자는 없다.
 */
function primeNumber(n) {
    if (n <= 1) {
        return false;
    } else {
        for (let i = 2; i < Math.sqrt(n); i++) {   // 1
            if (n % i === 0) {  // n
                return false; // 1
            }
        }
        return true;
    }

}
// Best case: n = 1 or n = 2 => O(1) => Constant Time Complexity
// Average case: n = 126 => O(n) => Linear Time Complexity
// Worst case: n = 27,277 => Improved : O(sqrt(n)) 
console.log("primeNumber", primeNumber(1), primeNumber(2), primeNumber(5), primeNumber(9), primeNumber(27277));


/**
 * Q) Take an array of numbers as input and return the minimum value in the array. (i.e. the smallest number)
 */
function getSmallest(numbers) {
    let currentMin = numbers[0];    // 1
    for (const num of numbers) {    // 1
        if (num < currentMin) { // n
            currentMin = num;   // 0 (Best case), n(worst case), n(avg.case)
        }
    }
    return currentMin;  // 1

    // numbers.sort((a,b) => a - b ); 
    // return numbers[0];
}
// O(n²)
console.log('getSmallest', getSmallest([4, 39, 2, 50]));


/**
 * Q) Take a number as input and return 'true' if it's an even number. 'false' for odd number.
 */
function isEvenNumber(n) {
    return n % 2 === 0; // 1
}
// O(1)
console.log('isEvenNumber', isEvenNumber(4), isEvenNumber(5));


/**
 * Q) Determine whether an input if a power of two(2^n).
 * isPowerOfTwo(8); // true
 * isPowerOfTwo(5); // false
 */
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    } else {
        let devided = n;
        while (devided !== 1) {
            if (devided % 2 !== 0) {
                return false;
            } else {
                devided = devided / 2;
            }
        }
        return true;
    }
}
// best case: n = 14 => O(1)
// worst case: n = 2^50 => 50 => O(log n) => Logarithmic Time Complexity
console.log('isPowerOfTwo', isPowerOfTwo(100), isPowerOfTwo(16), isPowerOfTwo(Math.pow(2, 50)));

/* with Bitwise Operators ] 
    2   00010
    4   00100
    8   01000
    16  10000
------------------------------------------------------------
  4   0010        4   0010        8   1000        16   10000
& 8   0100      & 7   0111      & 7   0111      & 15   01111
----------      ----------      ----------      ------------
      0000            0010            0000             00000
*/
function withBitwiseOperator(n) {
    if (n < 1) {
        return false;
    } else {
        return (n & n - 1) === 0;
    }
}
// O(1)
console.log('withBitwiseOperator', withBitwiseOperator(100), withBitwiseOperator(Math.pow(2, 5)));


/**
 * Q) Caculate the factorial of a number.
 * fact(3); // 3 * 2 * 1 = 6
 * fact(5); // 5 * 4 * 3 * 2 * 1 = 120
 */
function fact(n) {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum *= i;
    }
    return sum;
}
// Time Complexity: O(n)
// Space Complexity: O(1)
console.log('fact', fact(5));

/* with Recursion */
function factorial(n) {
    if (n <= 1) { // 1
        // factorial(1) 값 처리.
        return 1;   // 1
    } else {
        return n * factorial(n - 1); // 1 
    }
}
// Time Complexity:
// 5 * ( 4 * ( 3 * ( 2 * ( 1 ))))
// n * O(1) => O(n)
// Space Complexity: O(n)
console.log('factorial', factorial(5));