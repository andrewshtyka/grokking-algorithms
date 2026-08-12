/**
 * Count amount of items in array
 * 
 * Yeah, you could use "length"
 * But what if "length" and "shift()" don't exist?
 */

const result = countArrayElements([2, 2, 2, 2, 2]);
console.log(result);

function countArrayElements(arr = []) {
    if (arr[0] === undefined) return 0;
    
    const [, ...arrWithoutFirstEl] = arr;
    return 1 + countArrayElements(arrWithoutFirstEl);
};