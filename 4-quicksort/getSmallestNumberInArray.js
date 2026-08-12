/**
 * Get the smallest number in array
 * Pretend that "Math.min()" doesn't exist
 */

const num = getSmallestNumberInArray([-1, 6, 10]);
console.log(num);


function getSmallestNumberInArray(arr = []) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];

    const smaller = arr[0] > arr[1] ? arr[1] : arr[0];
    const bigger = arr[0] < arr[1] ? arr[1] : arr[0];

    const indexOfBigger = arr.indexOf(bigger);
    const nextArr = arr.toSpliced(indexOfBigger, 1);

    return getSmallestNumberInArray(nextArr)
};