/**
 * Compare tow items at a time and sort them. Go through the entire sorted multiple times until all pairs were compared and sorted.
 */
const array = [3, 10, -3, 48, 5, 3, -10, 56, 78, 33];

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
// Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime Outside of the Recursion: O(n)
// Algorithm Runtime: O(n^logb(a) * log n) => O(n * log n)

// best, ave: O(n * log n)
// worst: O(n^2)