const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};

const result = dijkstraSearchMap(graph, "A");
console.log("result", result);

function dijkstraSearchMap(graph, start = "") {
    const distances = new Map();
    const visitedNodes = new Set();
    const queue = [start];

    for (const node in graph) {        
        distances.set(node, Infinity);
    };
    distances.set(start, 0);

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (!visitedNodes.has(currentNode)) {
            visitedNodes.add(currentNode);

            const neighbours = graph[currentNode];

            for (const item in neighbours) {
                const newDistance = distances.get(currentNode) + neighbours[item];
                console.log(newDistance, distances.get(item));
                
                if (newDistance < distances.get(item)) {
                    distances.set(item, newDistance);
                    queue.push(item);
                };
            };
        };
    };

    return distances;
};