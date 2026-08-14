// create a graph
const graph = new Map();
graph.set("andrew", ["alice", "bob", "claire"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("alice", ["peggy"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anuj", []);
graph.set("peggy", []);
graph.set("thom", []);
graph.set("jonny", []);

// perform the BFS
function breadthFirstSearch(input = "") {
    const searchQueue = [];
    graph.get(input).forEach(item => {
        searchQueue.push(item);
    });
    
    const searched = new Set();
    
    while (searchQueue.length > 0) {
        const currentItem = searchQueue.shift();

        if (!searched.has(currentItem)) {
            if (itemMeetsConditions(currentItem)) {
                console.log(currentItem, "meets conditions!");
                return true;
            } else {
                graph.get(currentItem).forEach(item => {
                    searchQueue.push(item);
                });
                searched.add(currentItem);
            };
        };
    };

    return false;
};

// just a helper function
function itemMeetsConditions(name) {
    return name[name.length - 1] === "y";
}

const result = breadthFirstSearch("andrew");