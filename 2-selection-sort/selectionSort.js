/**
 * @speed = O(n log n)
 */

const list = [];
[...Array(100)].forEach(_ => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    const num = Math.round(Math.random() * 1000) * sign;
    list.push(num);
});


function findIndexOfSmallestValue(arr = []) {
    let smallest = arr[0];
    let smallest_index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    };

    return smallest_index;
};

function selectionSort(arr = []) {
    const processedArr = [...arr];
    const sortedArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        const indexOfSmallest = findIndexOfSmallestValue(processedArr);
        const value = processedArr[indexOfSmallest];
        sortedArr.push(value);
        processedArr.splice(indexOfSmallest, 1);
    }

    return sortedArr;
};

const result = selectionSort(list);
console.log(result);