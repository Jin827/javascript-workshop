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


function knapsack_recursion(items, cap, itemIndex) {
    console.log('START ..',);
    if (cap === 0 || itemIndex < 0) {
        console.log('RETURNING Init Data',);
        return { items: [], value: 0, weight: 0 };
    }
    if (cap < items[itemIndex].weight) {
        console.log('RETURNING, 무게가 클때',);
        return knapsack_recursion(items, cap, itemIndex - 1);
    }
    const sackWithItem = knapsack_recursion(
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1
    );
    const sackWithoutItem = knapsack_recursion(items, cap, itemIndex - 1);

    console.log('items[idx].value ', `[${itemIndex}] `, items[itemIndex].value);
    console.log("sack With Item", sackWithItem);
    console.log("sack WithOUT Item", sackWithoutItem);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    console.log("valueWithItem", valueWithItem);
    const valueWithoutItem = sackWithoutItem.value;
    console.log("valueWithoutItem", valueWithoutItem);

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
console.log('knapsack_recursion', knapsack_recursion(items, maxWeight, items.length - 1));