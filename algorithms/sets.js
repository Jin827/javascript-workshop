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