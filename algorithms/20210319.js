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

/**
 * Q) Determine whether an input number is a prime number(소수).
 */
function primeNumber(n) {
    if (n <= 1) {
        return false;
    }

    for (i = 2; i * i <= n; i++) {

        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("primeNumber", primeNumber(1), primeNumber(2), primeNumber(5), primeNumber(9), primeNumber(27277));

/**
 * Q) Take an array of numbers as input and return the minimum value in the array. (i.e. the smallest number)
 */
function getSmallest(numbers) {

    let smallest;

    if (numbers.length === 1) {
        return numbers[0];
    } else if (numbers.length === 2) {
        return numbers[0] <= numbers[1] ? numbers[0] : numbers[1];
    } else {
        const prev = getSmallest(numbers.slice(0, numbers.length / 2));
        const next = getSmallest(numbers.slice(numbers.length / 2));

        smallest = prev <= next ? prev : next;
    }
    return smallest;

}
console.log('getSmallest', getSmallest([4, 39, 3, 50, 11, 2, 36, 25, 13]));

function isPowerOfTwo_a(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    }
    else {
        if (n % 2 === 0) {
            return isPowerOfTwo(n / 2);
        } else {
            return false;
        }
    }
}

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    let devided = n;
    while (devided > 1) {
        if (devided % 2 !== 0) {
            return false;
        } else {
            devided = devided / 2;
        }
    }
    return true;
}
console.log('isPowerOfTwo', isPowerOfTwo(1), isPowerOfTwo(100), isPowerOfTwo(16), isPowerOfTwo(Math.pow(2, 50)));

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log('factorial', factorial(5));

/* Linear Search Algorithm */
const arr = [5, 4, 20, -10, 33, 51];
const person = { name: 'ji', age: '18' };
const obj = [
    person,
    { name: 'ah', age: '32' }
];

function linearSearch(arr, element) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return arr[i];
        }
    }
    return 'No Match';
}
console.log('linearSearch', linearSearch(arr, 4));
console.log('linearSearch', linearSearch(obj, person));

function linearSearch_Complete(object, element, comparatorFn) {
    for (i = 0; i < object.length; i++) {
        if (comparatorFn(object[i], element)) {
            return i;
        }
    }
    return 'No Match';
}

function comparatorFn(item, element) {
    return item.name === element.name && item.age === element.age;
}
console.log('linearSearch_Complete', linearSearch_Complete(obj, { name: 'ji', age: '18' }, comparatorFn));

/* Binary Search Algorithm */
const sortedArr = [1, 5, 9, 13, 27, 55, 78, 99, 100];

function binarySearch(sortedArr, element) {
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;

    while (startIdx < endIdx) {
        let medianIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
        const medianValue = sortedArr[medianIdx];

        if (medianValue === element) {
            return medianIdx;
        } else if (medianValue < element) {
            startIdx = medianIdx + 1;
        } else if (medianValue > element) {
            endIdx = medianIdx - 1;
        }
    }
}
console.log('binarySearch', binarySearch(sortedArr, 99));