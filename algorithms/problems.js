/**
 * [Knapsack Problem]
 * You got a list of items where every item has a val and a weight.
 * You got a bag that holds a maximum weight of X.
 *
 * Write a program that maximizes the val of the items you put into the bag whilst
 * ensuring that you don't exceed the maximum weight.
 */
const items = [
    { id: 'a', val: 3, w: 3 },
    { id: 'b', val: 6, w: 8 },
    { id: 'c', val: 10, w: 3 },
    { id: 'd', val: 20, w: 4 },
];
const maxWeight = 8;

function knapsack(items, maxWeight) {
    let bag = [];
    const options = [];

    // find options that meets a maximum weight
    for (let outer = 0; outer < items.length; outer++) {

        let ids = [];
        let w = 0;
        let val = 0;

        for (let inner = outer; inner < items.length; inner++) {

            if (w <= maxWeight && items[inner].w <= maxWeight - w) {
                ids.push(items[inner].id);
                w += items[inner].w;
                val += items[inner].val;
            }
        }
        options.push({ ids, w, val });
    }

    // find maximum sum of values
    bag = options[0];

    for (let i = 1; i < options.length; i++) {
        if (bag.val < options[i].val) {
            bag = options[i].ids;
        }
    }


    return bag;
}
console.log('knapsack', knapsack(items, maxWeight)); // ['a', 'c']