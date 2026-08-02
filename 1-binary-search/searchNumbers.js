/**
 * @speed = O(log n)
 */

const list = [];
[...Array(1000)].forEach((el, i) => {
    el = i + 1;
    list.push(el);
});

function binarySearch(arr = [], item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === item) return mid;
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }

    return null;
};

const result = binarySearch(list, 30);
console.log(result);
