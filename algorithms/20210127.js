/*- Q1 -*/
const person = { name: 'jiah', age: '18' };
const list = [
    person,
    { name: 'eunah', age: '32' }
];

function comparatorFn(person, element) {
    return person.name === element.name && person.age === element.age;
}

function linearSearch_Complete(list, element) {
    let result;

    for (const person of list) {
        if (comparatorFn(person, element)) {
            result = person;
        };
    }

    if (result) {
        return `${result.name} is Found.`;
    } else {
        return 'Does Not Exist.';
    };
}
console.log('linearSearch_Complete', linearSearch_Complete(list, { name: 'jiah', age: '18' }));

/*- Q2 -*/
const array = [-3, 13, -3, 100, -14, 1, 20, 55];

function sort(array) {
    const sorted = [...array];

    for (let outer = 0; outer < sorted.length; outer++) {
        let outerEl = sorted[outer];

        for (let inner = outer + 1; inner < sorted.length; inner++) {
            const innerEl = sorted[inner];

            if (outerEl > innerEl) {
                sorted[outer] = innerEl;
                sorted[inner] = outerEl;

                outerEl = innerEl;
            }
        }
    }
    return sorted;
}

function search(sortedArr, element) {
    const middleIdx = Math.floor(sortedArr.length / 2);
    const middleEl = sortedArr[middleIdx];

    if (middleEl === element) {
        return middleEl;
    }
    if (sortedArr.length <= 1) {
        return 'Not Found.';
    }

    // recursive search
    let startIdx;
    let endIdx;

    if (middleEl > element) {
        startIdx = 0;
        endIdx = middleIdx;
    } else {
        startIdx = middleIdx + 1;
        endIdx = sortedArr.length;
    }

    return search(sortedArr.slice(startIdx, endIdx), element);
}

function binarySearch(array, element) {
    const sortedArr = sort(array);
    const output = search(sortedArr, element);
    return output;
}
console.log('binarySearch', binarySearch(array, 12));

/*- Q3 -*/
function quickSort(array) {
    const copiedArray = [...array];

    if (copiedArray.length <= 1) {
        // returing - end recursion.
        return copiedArray;
    }

    const pivotEl = copiedArray.shift();

    const smallerArr = [];
    const centerArr = [pivotEl];
    const biggerArr = [];

    copiedArray.forEach(item => {
        if (pivotEl > item) {
            smallerArr.push(item);
        } else if (pivotEl === item) {
            centerArr.push(item);
        } else {
            biggerArr.push(item);
        }
    });

    // after looping
    const samllerSortedArr = quickSort(smallerArr);
    const biggerSortedArr = quickSort(biggerArr);

    // after recursive steps, excutes the following function which was paused.
    return samllerSortedArr.concat(centerArr, biggerSortedArr);
}
console.log('quickSort', quickSort(array));

/*- Q4 -*/
function mergeSort(array) {
    // split array
    const middleIdx = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIdx);
    const rightArr = array.slice(middleIdx);

    // end of recursion
    if (array.length < 2) {
        return array;
    }
    if (array.length === 2) {
        // sort
        return array[0] > array[1] ? [array[1], array[0]] : array;
    }

    // split array multiple times using recursion
    const leftSortedArrays = mergeSort(leftArr);
    const rightSortedArrays = mergeSort(rightArr);

    // after recursive steps, sorts and concatenates them.
    const mergedArr = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < leftSortedArrays.length || rightIdx < rightSortedArrays.length) {
        if (leftSortedArrays[leftIdx] > rightSortedArrays[rightIdx] || leftIdx >= leftSortedArrays.length) {
            mergedArr.push(rightSortedArrays[rightIdx]);
            rightIdx++;
        } else {
            mergedArr.push(leftSortedArrays[leftIdx]);
            leftIdx++;
        }
    }

    return mergedArr;
}
console.log('mergeSort', mergeSort(array));

/*- Q5 -*/
const colors = ['blue', 'red'];
const size = ['s', 'm', 'l', 'xl'];
const styles = ['round neck', 'v neck'];

function cartesian(setA, setB) {
    const product = [];

    setA.forEach(setAEl => {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl];
        }

        for (const setBEl of setB) {
            product.push([...setAEl, setBEl]);
        }
    });

    return product;
}

function cartesianProduct(...options) {
    let cartesians = options[0];

    for (let i = 1; i < options.length; i++) {
        cartesians = cartesian(cartesians, options[i]);
    }
    // returns arrays of array
    return cartesians;
}
console.log('cartesianProduct', cartesianProduct(colors, size, styles));