// 1. create sorted array
const myList = [];
[...Array(100)].forEach((el, i) => {
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

const result = binarySearch(myList, 30);
console.log(result);

