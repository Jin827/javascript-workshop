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

/**
 * Q) Determine whether an input number is a prime number(소수).
 * isPrime(9); // false
 * isPrime(5); // true
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
 console.log('getSmallest', getSmallest([4,39,2,50]));

 /**
  * Q) Take a number as input and return 'true' if it's an even number. 'false' for odd number.
  */
 function isEvenNumber(n) {
    return n % 2 === 0; // 1
 }
 // O(1)
 console.log('isEvenNumber', isEvenNumber(4), isEvenNumber(5));