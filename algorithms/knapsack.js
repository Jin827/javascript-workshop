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
    { id: 'b', value: 10, weight: 3 },
    { id: 'c', value: 6, weight: 8 },
    { id: 'd', value: 20, weight: 4 },
];
const maxWeight = 8;

function knapsack(items, cap, itemIndex) {
    if (cap === 0 || itemIndex < 0) { // base code
        return { items: [], value: 0, weight: 0 };
    }
    if (cap < items[itemIndex].weight) {
        return knapsack(items, cap, itemIndex - 1);
    }

    /*- if (cap >= items[itemIndex].weight) -*/
    const sackWithItem = knapsack( // 1. 아이템을 sack에 포함시킨다고 가정한 경우
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1,
    );
    const sackWithoutItem = knapsack(items, cap, itemIndex - 1); // 2. 아이템을 sack에 포함시키기 않는다고 가정한 경우

    const valueWithItem = sackWithItem.value + items[itemIndex].value;  // 아이템을 sack에 포함시킨다고 가정한 경우의 value
    const valueWithoutItem = sackWithoutItem.value; // 아이템을 sack에 포함시키기 않는다고 가정한 경우의 value

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        };
        return updatedSack;
    } else {
        return sackWithoutItem;
    }
}
console.log('knapsack', knapsack(items, maxWeight, items.length - 1));

function improved_knapsack(items, cap, itemIndex, memo) {
    if (memo[cap][itemIndex]) {
        return memo[cap][itemIndex];
    }
    if (cap === 0 || itemIndex < 0) {
        return { items: [], value: 0, weight: 0 };
    }
    if (cap < items[itemIndex].weight) {
        return improved_knapsack(items, cap, itemIndex - 1, memo);
    }

    const sackWithItem = improved_knapsack(
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1,
        memo,
    );
    const sackWithoutItem = improved_knapsack(items, cap, itemIndex - 1, memo);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    let resultSack;

    if (valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        };
        resultSack = updatedSack;
    } else {
        resultSack = sackWithoutItem;
    }

    // update memo
    memo[cap][itemIndex] = resultSack;
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

console.log('knapsack_memo', knapsack_memo(items, maxWeight, items.length - 1));
// Time Complexity
// without memoization: O(2^n)
// with memoization: O(n*C)