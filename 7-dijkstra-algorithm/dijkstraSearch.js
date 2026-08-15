const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};

const result = dijkstraSearch(graph, "A");
// console.log(result);

function dijkstraSearch(graph, start = "") {
    const distances = {};
    const visitedNodes = new Set();
    const queue = [start];

    for (const node in graph) {        
        distances[node] = Infinity;
    };

    distances[start] = 0;

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (!visitedNodes.has(currentNode)) {
            visitedNodes.add(currentNode);

            const neighbours = graph[currentNode];

            for (const item in neighbours) {
                const newDistance = distances[currentNode] + neighbours[item];
                
                if (newDistance < distances[item]) {
                    distances[item] = newDistance;
                    queue.push(item);
                }
            }
        }
    }

    let lengthTotal = null;
    for (const value of Object.values(distances)) {
        lengthTotal += value;
    };

    return {
        path: distances,
        length: lengthTotal
    };
};