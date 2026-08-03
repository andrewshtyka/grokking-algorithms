function countdown(num) {
    if (num === 0) {
        return console.log("Done");
    };
    console.log(num);

    setTimeout(() => {
        countdown(num - 1);
    }, 1000);
};

const result = countdown(5);
