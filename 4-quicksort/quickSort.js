/**
 * Quick sort algorithm
 * Speed: depends on the chosen "pivot" element O(n log n)
 */

const list = [];
[...Array(100)].forEach(_ => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    const num = Math.round(Math.random() * 1000) * sign;
    list.push(num);
});

const result = quickSort(list);
// console.log(result);

function quickSort(arr = []) {
    if (arr.length < 2) return arr;

    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
};