const list = [];
[...Array(100)].forEach(_ => {
    const num = Math.random() * 100;
    list.push(num);
});

function sortIntegers(arr = []) {
    const processedArr = [...arr];
    const sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const highestValue = Math.max(...processedArr);
        const index = processedArr.indexOf(highestValue);
        processedArr.splice(index, 1);
        sortedArr.push(highestValue);        
    };

    return sortedArr;
};

function nativeSorting(arr = []) {
    const processeddArr = [...arr];
    const sortedArr = processeddArr.sort((a, b) => a - b);
    return sortedArr;
}

const start_1 = performance.now();
const result_1 = sortIntegers(list);
const finish_1 = performance.now();
const time_1 = finish_1 - start_1;
console.log("sortIntegers:", time_1);

const start_2 = performance.now();
const result_2 = nativeSorting(list);
const finish_2 = performance.now();
const time_2 = finish_2 - start_2;
console.log("nativeSorting:", time_2);






