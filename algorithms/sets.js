function cartProduct(setA, setB) {
    const product = [];

    setA.forEach((color) => {
        for (const size of setB) {
            product.push([color, size]);
        }
    });

    return product;
}

const colors = ['blue', 'red'];
const size = ['m', 'l'];
console.log('cartProduct', cartProduct(colors, size));  // [['blue','m], ...]
// Time Complexity: O(n*m) => O(n^2)
// Space Complexity: O(n*m) => O(n^2) - create one new value[color,size] in product array on every loop.