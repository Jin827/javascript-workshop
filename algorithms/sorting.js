/**
 * Compare tow items at a time and sort them. Go through the entire sorted multiple times until all pairs were compared and sorted.
 */
const array = [3, 10, -3, 48, 5, 2, 33];

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

function simpleSorting(array) {
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

console.log('simpleSorting', simpleSorting(array));

function sort(array) {
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

console.log("sort", sort(array));
// best: O(n)
// ave, worst: O(n^2)

