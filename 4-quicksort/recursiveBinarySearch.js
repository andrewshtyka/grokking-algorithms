/**
 * Time: O(log n)
 * Memory: O(log n) (worse than interative approach, that takes O(1))
 */

const input = [1, 4, 10, 16, 29];
const result = recursiveBinarySearch(input, 29);
console.log(result);


function recursiveBinarySearch(
    arr = [],
    item,
    indexLow = 0,
    indexHigh = arr.length - 1
) {
    if (indexLow > indexHigh) return null;
    
    const indexMid = Math.floor((indexLow + indexHigh) / 2);
    const guess = arr[indexMid];

    if (guess === item) return indexMid;

    if (guess > item) {
        const nextIndexHigh = indexMid - 1;
        return recursiveBinarySearch(arr, item, indexLow, nextIndexHigh);
    } else {
        const nextIndexLow = indexMid + 1;
        return recursiveBinarySearch(arr, item, nextIndexLow, indexHigh);
    };
};