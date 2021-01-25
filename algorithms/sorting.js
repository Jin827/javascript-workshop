/**
 * Compare tow items at a time and sort them. Go through the entire sorted multiple times until all pairs were compared and sorted.
 */
const array = [3, 10, -3, 48, 5];

function validation(sorted) {
    let test = [];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > sorted[i + 1]) {
            test.push(false);
            break;
        } else {
            test.push(true);
        }
    };

    const inValid = test.findIndex(i => i === false);

    if (inValid === -1) {
        return true;
    } else {
        return false;
    }
}

function simpleSort(array) {
    let sorted = [...array];
    let isSorted = false;

    while (!isSorted) {
        sorted.forEach((value, idx) => {
            const current = value;
            const next = sorted[idx + 1];

            if (current > next) {
                sorted[idx] = next;
                sorted[idx + 1] = current;
            }
        });

        isSorted = validation(sorted);
    }
    return sorted;
}
console.log('simpleSort', simpleSort(array));

function bubbleSort(array) {
    const resultArray = [...array];

    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer];

        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner];

            if (outerEl > innerEl) {
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl;

                // to have updated outerEl value for the next inner Loop.
                outerEl = resultArray[outer];
            }
        }
    }

    return resultArray;
}
console.log("bubbleSort", bubbleSort(array));
// best: O(n)
// ave, worst: O(n^2)

/**
 * [ Quick Sort using Recursion ]
 * Use pivot elements to split array into smaller chunks - elements bigger, smaller and equal than the pivot element.
 * Repeat that process for all chunks and concat the sorted chunks.
 */
function quickSort(arr) {
    const copiedArray = [...arr];

    if (copiedArray.length <= 1) {
        return copiedArray;
    }

    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const pivotElement = copiedArray.shift();
    const centerElementsArray = [pivotElement];

    while (copiedArray.length) {
        const currentElement = copiedArray.shift();

        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement);
        } else if (currentElement < pivotElement) {
            smallerElementsArray.push(currentElement);
        } else {
            biggerElementsArray.push(currentElement);
        }
    }

    const smallerElementsSortedArray = quickSort(smallerElementsArray);
    const biggerElementsSortedArray = quickSort(biggerElementsArray);

    return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray);
}
console.log('quickSort', quickSort(array));
// Recursive Step Time Complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Time Complexity Outside of the Recursion: O(n)
// Algorithm Time Complexity: O(n^logb(a) * log n) => O(n * log n)

// best, ave: O(n * log n)
// worst: O(n^2)

/**
 * [ Merge Sort ]
 * Split array multiple times until we have only 2-emelemt arrays left.
 * - sort those arrays and merge them back together.
 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    // arr.length > 2 => split arrays
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
    // recursive splitting
    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    // when all arrays are split into 1 or 2 length
    // sort and merge them
    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;

    while (leftArrIndex < leftSortedArray.length || rightArrIndex < rightSortedArray.length) {
        // when leftArray length is smaller than rightArray length
        // => leftArrIndex >= leftSortedArray.length
        if (leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
            mergedArr.push(rightSortedArray[rightArrIndex]);
            rightArrIndex++;
        } else {
            mergedArr.push(leftSortedArray[leftArrIndex]);
            leftArrIndex++;
        }
    }
    return mergedArr;
}
console.log('mergeSort', mergeSort(array));
// O(n * log n)