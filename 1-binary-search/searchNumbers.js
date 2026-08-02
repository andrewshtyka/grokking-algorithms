// 1. create sorted array
const myList = [];
[...Array(1000)].forEach((el, i) => {
    el = i + 1;
    myList.push(el);
});

// 2. perform binary search
// return index of "item"
function binarySearch(list = [], item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) return mid;
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }

    return null;
};
const startTime1 = performance.now()
const result1 = binarySearch(myList, 30);
const endTime1 = performance.now()
console.log(`Binary search: ${endTime1 - startTime1} ms`);

function nativeSearch(list = [], item) {
    if (list.includes(item)) return list.indexOf(item);
    return null;
}

const startTime2 = performance.now()
const result2 = binarySearch(myList, 30);
const endTime2 = performance.now()
console.log(`Native: ${endTime2 - startTime2} ms`);