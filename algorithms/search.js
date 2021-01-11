let count = 0;

/**
 * [ Linear Search Algorithm ]
 */
function findElement(arr, element) {
    let index = 0;
    for (const item of arr) {
        count++;
        if (item === element) {
            return index;
        }
        index++;
    }
}

const arr = [5, 4, 20, -10, 33, 51];
console.log('findElement', findElement(arr, 20), count);
count = 0;

const obj = [
    { name: 'ji', age: '18'},
    { name: 'ah', age: '32'}
];
console.log('findElement', findElement(obj, { name: 'ji', age: '18'}));
/**
 * => undefined.
 * why ? Objects are reference values in javaScript.
 * (The objects in line 20) !== (The object in line 24) 
 * These are two different objects in two different places in memory.
 */
const person = { name: 'ji', age: '18'}
const object = [
    person,
    { name: 'ah', age: '32'}
];
console.log('findElement', findElement(object, person));
/**
 * => 0
 * why ? Because the person object is only defined once.
 * so now we are dealing with exact same object in memory.
 */    

function findIndex(objects, element, comparatorFn) {
    let index = 0;

    for (const item of objects) {
        // null is object type.
        if (
            typeof element === 'object' && 
            typeof element !== null && 
            comparatorFn(element, item)
        ) {
            return index;
        }
        if (item === element) {
            return index;
        }
        index++;
    } 
} 

function comparatorFn(element, item) {
    return element.name === item.name && element.age === item.age;
}

console.log('findIndex', findIndex(obj, { name: 'ji', age: '20'}, comparatorFn)); // 0 
/**
 * Time Complexity
 * Best: the item's at the beginning -> O(1)
 * Ave : random order, we don't know where the item is -> Tends to be O(n)
 * Worst: the item's at the end -> O(n)
 */