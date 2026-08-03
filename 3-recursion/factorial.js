function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    };
};

const result = factorial(10);
console.log(result);
