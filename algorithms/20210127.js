// Q1)
const person = { name: 'jiah', age: '18' };
const list = [
    person,
    { name: 'eunah', age: '32' }
];

function comparatorFn(person, element) {
    return person.name === element.name && person.age === element.age;
}

function linearSearch_Complete(list, element) {
    let result;

    for (const person of list) {
        if (comparatorFn(person, element)) {
            result = person;
        };
    }

    if (result) {
        return `${result.name} is Found.`;
    } else {
        return 'Does Not Exist.';
    };
}
console.log('linearSearch_Complete', linearSearch_Complete(list, { name: 'jiah', age: '18' }));


// Q2)
const array = [9, 13, 1, 5, 27, 55, 99, 100, 78, 12, 20, 50, 68];

function sort(array) {
    const sorted = [...array];

    for (let outer = 0; outer < sorted.length; outer++) {
        let outerEl = sorted[outer];

        for (let inner = outer + 1; inner < sorted.length; inner++) {
            const innerEl = sorted[inner];

            if (outerEl > innerEl) {
                sorted[outer] = innerEl;
                sorted[inner] = outerEl;

                outerEl = innerEl;
            }
        }
    }
    return sorted;
}

function search(sortedArr, element) {
    const middleIdx = Math.floor((sortedArr.length - 1) / 2);
    const middleEl = sortedArr[middleIdx];

    if (middleEl === element) {
        return middleEl;
    }
    if (sortedArr.length <= 1) {
        return 'Not Found.';
    }

    // recursive search
    let startIdx;
    let endIdx;

    if (middleEl > element) {
        startIdx = 0;
        endIdx = middleIdx;
    } else {
        startIdx = middleIdx + 1;
        endIdx = sortedArr.length;
    }

    return search(sortedArr.slice(startIdx, endIdx), element);


}

function binarySearch(array, element) {
    const sortedArr = sort(array);
    const output = search(sortedArr, element);
    return output;
}
console.log('binarySearch', binarySearch(array, 12));


// Q3)