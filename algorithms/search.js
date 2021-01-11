let count = 0;

/* Linear Search Algorithm */
const arr = [5, 4, 20, -10, 33, 51];
const obj = [
    { name: 'ji', age: '18'},
    { name: 'ah', age: '32'}
];
function linearSearch(arr, element) {
    let index = 0;
    for (const item of arr) {
        count++;
        if (item === element) {
            return index;
        }
        index++;
    }
}


console.log('linearSearch', linearSearch(arr, 20), count);
count = 0;
console.log('linearSearch', linearSearch(obj, { name: 'ji', age: '18'}));
/**
 * => undefined.
 * why ? Objects are reference values in javaScript.
 * (The objects in line 20) !== (The object in line 24) 
 * These are two different objects in two different places in memory.
 */
const person = { name: 'ji', age: '18'};
const object = [
    person,
    { name: 'ah', age: '32'}
];
console.log('linearSearch', linearSearch(object, person));
/**
 * => 0
 * why ? Because the person object is only defined once.
 * so now we are dealing with exact same object in memory.
 */    

function linearSearch_Complete(objects, element, comparatorFn) {
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

console.log('linearSearch_Complete', linearSearch_Complete(obj, { name: 'ji', age: '18'}, comparatorFn)); // 0 
/**
 * Best: the item's at the beginning -> O(1)
 * Ave : random order, we don't know where the item is -> Tends to be O(n)
 * Worst: the item's at the end -> O(n)
 */


/* Binary Search Algorithm */
const sortedArr = [1, 5, 9, 13, 27, 55, 78, 99, 100];

function binarySearch(sortedArr, element) {
   let startIdx = 0;
   let endIdx = sortedArr.length - 1;
   
   while (startIdx <= endIdx) {
        const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

        if (sortedArr[middleIdx] === element) {
            return middleIdx;
        }

        if (sortedArr[middleIdx] < element) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }     
   }
}
console.log('binarySearch', binarySearch(sortedArr, 99));
/**
 * Best: the item's right in the middle -> O(1)
 * Ave : we don't know where the item is -> Tends to be O(log n)
 * Worst: the item's at the beginning or end -> O(log n)
 */


/* Recursive Binary Search */
function recursiveBinarySearch(sortedArr, element, offset) {
    // outside of recursion: O(1)
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;
    const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    console.log("sortedArr", sortedArr)
    console.log('index', startIdx, endIdx, middleIdx, offset);

    if (sortedArr[middleIdx] === element) {
        return middleIdx + offset;
    } 
    
    if (sortedArr[middleIdx] < element) {
        startIdx = middleIdx + 1;
        offset = offset + middleIdx + 1; // 'middleIdx + 1' 는 middleIdx 까지의 갯수(length)를 구하기 위함.
    } else {
        endIdx = middleIdx - 1;
    } 
    // inside of recursion: O(1)   
    return recursiveBinarySearch(sortedArr.slice(startIdx, endIdx + 1), element, offset);
 }
 console.log('recursiveBinarySearch', recursiveBinarySearch(sortedArr, 99, 0));
 /**
  * a = 1(search function itself is called once), b = 2(array's always split in half)
  * O(n^logb a) => O(n^log2 1) => O(n^0) => O(1) 
  * 
  * Overall algorithm time complexity(same work inside and outside of recursion):
  * O(n^logb a * log n) => O(1 * log n) => O(log n)
  */