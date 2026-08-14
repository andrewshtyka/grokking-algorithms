// add people
const people = new Map();
people.set("Andrew", ["Anna", "Bob", "Jake"]);
people.set("Anna", ["Ross", "Rachel"]);
people.set("Bob", ["Joey", "Harry"]);
people.set("Jake", ["Hermione", "Ron"]);
people.set("Ross", []);
people.set("Rachel", []);
people.set("Joey", []);
people.set("Harry", []);
people.set("Hermione", []);
people.set("Ron", []);

// set univerisites they studied at
const universities = new Map();
universities.set("Andrew", "KNEU");
universities.set("Anna", "NAU");
universities.set("Bob", "KNMA");
universities.set("Jake", "Harvard");
universities.set("Ross", "Berkley");
universities.set("Rachel", "Oxford");
universities.set("Joey", "Cambridge");
universities.set("Harry", "Hogwarts");
universities.set("Hermione", "Hogwarts");
universities.set("Ron", "Hogwarts");

// implement search (find all people who studied in certain university)
function bfsSameUniversity(startName = "", university = "") {
    const queue = [];
    people.get(startName).forEach(item => {
        queue.push(item);
    });
    const checked = new Set();
    const result = new Set();
    
    while (queue.length > 0) {
        const currentName = queue.shift();

        if (!checked.has(currentName)) {
            if (universities.get(currentName) === university) {
                result.add(currentName);
                checked.add(currentName);
            } else {
                people.get(currentName).forEach(item => {
                    queue.push(item);
                });
                checked.add(currentName);
            };
        };
    };

    return [...result];
};

const result = bfsSameUniversity("Andrew", "Hogwarts");
console.log(result);
