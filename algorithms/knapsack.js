/**
 * [Knapsack Problem]
 * You got a list of items where every item has a val and a weight.
 * You got a bag that holds a maximum weight of X.
 *
 * Write a program that maximizes the val of the items you put into the bag whilst
 * ensuring that you don't exceed the maximum weight.
 */
const items = [
    { id: 'a', value: 3, weight: 3 },
    { id: 'b', value: 6, weight: 8 },
    { id: 'c', value: 10, weight: 3 },
    { id: 'd', value: 20, weight: 4 },
];
const maxWeight = 8;

function knapsack(list, maxWeight) {
    let bag = [];
    const permutations = [];

    // find all permutations that meets a maximum weight below the max weight
    for (let outer = 0; outer < list.length; outer++) {

        let items = [];
        let weight = 0;
        let value = 0;

        for (let inner = outer; inner < list.length; inner++) {

            if (weight <= maxWeight && list[inner].weight <= maxWeight - weight) {
                items.push(list[inner]);
                weight += list[inner].weight;
                value += list[inner].value;
            }
        }
        permutations.push({ items, value, weight });
    }

    // find hightest value of permutations
    bag = permutations[0];

    for (const permutation of permutations) {
        if (bag.value < permutation.value) {
            bag = permutation;
        }
    }
    return bag;
}
console.log('knapsack', knapsack(items, maxWeight)); // ['a', 'd']


function knapsack_recursion(items, cap, itemIndex, option = '') {
    console.count(`### START.. ###`);
    console.log(option);
    console.log(`[${itemIndex}] `, `cap: ${cap} `, `weight: ${itemIndex >= 0 ? items[itemIndex].weight : null}`);

    if (cap === 0 || itemIndex < 0) {
        console.log('RETURN.. - End -',);
        return { items: [], value: 0, weight: 0 };
    }
    if (cap < items[itemIndex].weight) {
        return knapsack_recursion(items, cap, itemIndex - 1, 'cap < weight');
    }

    const sackWithItem = knapsack_recursion(
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1,
        'sackWithItem'
    );
    const sackWithoutItem = knapsack_recursion(items, cap, itemIndex - 1, 'sackWithoutItem');

    console.log("sack WITH Item", `[${itemIndex}] `, sackWithItem);
    console.log("sack WITHOUT Item", `[${itemIndex}] `, sackWithoutItem);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    console.log("valueWithItem", valueWithItem);
    console.log("valueWithoutItem", valueWithoutItem);

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        };

        console.log("RETURN updatedSack", updatedSack);
        return updatedSack;
    } else {
        console.log("RETURN sackWithoutItem", sackWithoutItem);
        return sackWithoutItem;
    }
}
console.log('knapsack_recursion', knapsack_recursion(items, maxWeight, items.length - 1));

function improved_knapsack(items, cap, itemIndex, memo, option = '') {
    console.count(`### START.. ###`);
    console.log(option);
    console.log(`[${itemIndex}] `, `cap: ${cap} `, `weight: ${itemIndex >= 0 ? items[itemIndex].weight : null}`);

    if (memo[cap][itemIndex]) {
        // returns a knapsack
        console.error('RETURN Knapsack: ', memo[cap][itemIndex]);
        return memo[cap][itemIndex];
    }
    if (cap === 0 || itemIndex < 0) {
        console.log('RETURN.. - End -',);
        return { items: [], value: 0, weight: 0 };
    }
    if (cap < items[itemIndex].weight) {
        return improved_knapsack(items, cap, itemIndex - 1, memo, 'cap < weight');
    }

    const sackWithItem = improved_knapsack(
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1,
        memo,
        'sackWithItem'
    );
    const sackWithoutItem = improved_knapsack(items, cap, itemIndex - 1, memo, 'sackWithoutItem');

    console.log("sack WITH Item", `[${itemIndex}] `, sackWithItem);
    console.log("sack WITHOUT Item", `[${itemIndex}] `, sackWithoutItem);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    console.log("valueWithItem", valueWithItem);
    console.log("valueWithoutItem", valueWithoutItem);

    let resultSack;

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        };

        console.log("RETURN updatedSack", updatedSack);
        resultSack = updatedSack;
    } else {
        console.log("RETURN sackWithoutItem", sackWithoutItem);
        resultSack = sackWithoutItem;
    }

    // update memo
    memo[cap][itemIndex] = resultSack;
    console.log("memo", memo);

    return resultSack;
}

function knapsack_memo(items, cap, index) {
    /**
     * Array(cap + 1) - to use 'cap' as index.
     * ex) cap = 2 -> array[2] should exsit -> array.length = cap + 1 
     */
    const memo = Array.from(Array(cap + 1), () => Array(items.length).fill(undefined));
    /**
     * [Array(items.length),... x (cap + 1)]
     * Array(items.length) => [undefined,... x (items.length)]
     */
    return improved_knapsack(items, cap, index, memo);
}

// console.log('knapsack_memo', knapsack_memo(items, maxWeight, items.length - 1));
// Time Complexity
// without memoization: O(2^n)
// with memoization: O(n*C)