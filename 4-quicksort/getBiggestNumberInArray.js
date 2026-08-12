/**
 * Get the biggest number in array
 * Pretend that "Math.max()" doesn't exist
 */

const result = getBiggestNumberInArray([2, 221, 9]);
// console.log(result);

function getBiggestNumberInArray(arr = []) {
    if (arr.length === 0) return;
    if (arr.length === 1) return arr[0];

    const bigger = arr[0] > arr[1] ? arr[0] : arr[1];
    const smaller = arr[0] < arr[1] ? arr[0] : arr[1];

    const indexOfSmaller = arr.indexOf(smaller);
    const nextArr = arr.toSpliced(indexOfSmaller, 1);
    
    return getBiggestNumberInArray(nextArr);
};


