function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    };
};

// const result = factorial(10);
// console.log(result);

const list = [];
[...Array(100)].forEach((_, i) => {
    list.push(i);
});



function searchNumber(arr = [], item) {
    const newArr = [...arr];

    const index = newArr.includes(item);
    if (index) return newArr.indexOf(item);
    else return null;
};

const result = searchNumber(list, 1);
console.log(result);
