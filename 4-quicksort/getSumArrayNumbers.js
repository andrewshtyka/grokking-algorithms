const result = getSumArrayNumbers([2, 4, 6]);
// console.log(result);

function getSumArrayNumbers(arr = []) {
    // base case
    if (arr.length === 0) return 0;
    
    const firstValue = arr.shift();
    return firstValue + getSumArrayNumbers(arr);
};