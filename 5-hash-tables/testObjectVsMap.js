const obj = {
    tom: 12
};

const map = new Map();
map.set("tom", 12);

const start_1 = performance.now();
const getTomObj = obj["tom"];
const end_1 = performance.now();

const start_2 = performance.now();
const getTomMap = map.get("tom");
const end_2 = performance.now();

console.log(end_1 - start_1, "get", getTomObj, "from Object");
console.log(end_2 - start_2, "get", getTomMap, "from Map");
