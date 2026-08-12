/**
 * Count amount of items in array
 * 
 * Yeah, you could use "length"
 * But what if "length" and "shift()" don't exist?
 * I mean, life shouldn't be that easy, right?
 */

const result = countArrayElements([2, 2, 2, 2, 2]);
console.log(result);

function countArrayElements(arr = []) {
    if (arr[Symbol.iterator]().next().done) return 0;
    
    const arrWithoutFirstEl = arr.slice(1);
    return 1 + countArrayElements(arrWithoutFirstEl);
};

/**
 * arr[Symbol.iterator] — function
 * 
 * arr[Symbol.iterator]() - calling function. Returns object-iterator, that can iterate over element of array once at a time
 * 
 * arr[Symbol.iterator]().next() - returns next array element as an object, i.e. { value: 1, done: false }
 * 
 * done = true ? array is empty
 * done = false ? array in NOT empty
 */