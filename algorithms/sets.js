/* Cartesian Product */
function cartProduct(setA, setB) {
    const product = [];

    setA.forEach((setAEl) => {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl];
        }

        for (const setBEl of setB) {
            product.push([...setAEl, setBEl]);
        }
    });

    return product;
}

const colors = ['blue', 'red'];
const size = ['s', 'm', 'l', 'xl'];
const styles = ['round neck', 'v neck'];
// console.log('cartProduct', cartProduct(colors, size));  // [['blue','m], ...]
// Time Complexity: O(n*m) => O(n^2)
// Space Complexity: O(n*m) => O(n^2) - create one new value[color,size] in product array on every loop.

/* Cartesian Product without Limits */
function cartesian(...sets) {
    let product = sets[0];

    for (let i = 1; i < sets.length; i++) {
        product = cartProduct(product, sets[i]);
    }

    return product;
}
console.log('cartesian', cartesian(colors, size, styles));  // [['blue','m], ...]
// Time Complexity: O(n^x)
// Space Complexity: O(n^x)

/* Permutations without Repetition */

function looping(x, y) {
    console.log("looping -> x, y", x, y);
    const store = [];
    for (let j = 0; j <= x.length; j++) {
        console.log('store', x.splice(j, 0, y));
        store.push(x.splice(j, 0, y));
    }
    return store;
};

function getPermutations(options) {
    const permutations = [];

    if (options.length === 1) {
        // returns array of array.
        return [options];
    }

    // How Recursion Work..?
    // the rest of (for loop)function execution pauses And the nested function execution starts.

    // split array until we have an array with just one element => [["do homework"]] 
    const partialPermutations = getPermutations(options.slice(1));

    // after recursive step
    // we only didn't slice the first option. (Not part of the array)
    // -> so we need to compare to other permutations.
    const firstOption = options[0];

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];

        // access to the concrete items in the partialPermutation array.
        for (let j = 0; j <= partialPermutation.length; j++) {

            const permutationInFront = partialPermutation.slice(0, j);
            const permutationAfter = partialPermutation.slice(j);

            // combines concrete elements with remaining option(option[0]).
            // => insert firstOption value into the position 0,1,2,...the end.
            permutations.push(
                permutationInFront.concat([firstOption], permutationAfter)
            );
        }
    }
    // we're done with another recursive step.
    // execute for loop again with returned permutations.
    return permutations;
}

const todoListItems = [
    'walk the dog',
    'clean the toilet',
    'buy groceries',
    'order food',
    'do homework'
];

// Time Complexity: O(n!) => 4 * 3 * 2 * 1 = 24; 5 * 4 * 3 * 2 * 1 = 120
console.log('getPermutations', getPermutations(todoListItems));

/* Permutations with Repetition */
function getPermutationsWithRepetition(options, length) {
    const permutations = [];

    if (length === 1) {
        // [[1], [2], [3]...]
        return options.map(option => [option]);
    }
    // the end result of the recursions => [[1], [2], [3]]
    const partialPermutations = getPermutationsWithRepetition(options, length - 1);

    for (const option of options) {
        for (const existingPermutation of partialPermutations) {
            permutations.push([option].concat(existingPermutation));
        }
    }

    return permutations;
}

const digits = [1, 2, 3];
const resultLength = 3;
// Time Complexity: O(n^r) => n is the number of options, r is the length.
console.log('getPermutationsWithRepetition', getPermutationsWithRepetition(digits, resultLength));