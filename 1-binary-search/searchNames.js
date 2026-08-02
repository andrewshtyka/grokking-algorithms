const names = [
    "Aaron", "Abigail", "Adam", "Adrian", "Aidan", "Alan", "Albert", "Alex", "Alexander", "Alexandra", "Alice", "Alicia", "Amanda", "Amelia", "Amy", "Andrea", "Andrew", "Angela", "Anna", "Anthony", "Antonio", "Arthur", "Ashley", "Aubrey", "Austin", "Barbara", "Benjamin", "Bethany", "Brandon", "Brian", "Brittany", "Bruce", "Bryan", "Caleb", "Cameron", "Carl", "Carla", "Carlos", "Carol", "Caroline", "Carter", "Charles", "Charlotte", "Chloe", "Christian", "Christina", "Christopher", "Claire", "Cody", "Colin", "Connor", "Cynthia", "Daniel", "David", "Dennis", "Diana", "Dominic", "Donald", "Dorothy", "Douglas", "Dylan", "Edward", "Elena", "Eleanor", "Elijah", "Elizabeth", "Emily", "Emma", "Eric", "Ethan", "Eugene", "Evan", "Evelyn", "Felix", "Fiona", "Frank", "Gabriel", "George", "Gerald", "Grace", "Gregory", "Hailey", "Hannah", "Harold", "Harry", "Helen", "Henry", "Hunter", "Ian", "Isaac", "Isabella", "Jack", "Jacob", "James", "Jason", "Jennifer", "Jessica", "John", "Jonathan", "Joseph", "Joshua", "Julia", "Justin", "Kathryn", "Kevin", "Kyle", "Laura", "Liam", "Lily", "Logan", "Lucas", "Lucy", "Madison", "Maria", "Mark", "Martin", "Mason", "Matthew", "Michael", "Natalie", "Nathan", "Nicholas", "Nicole", "Noah", "Olivia", "Owen", "Patrick", "Peter"
];

function binarySearch(list = [], item = "") {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) return mid;
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const result = binarySearch(names, "Andrew");
console.log(names[result]);
