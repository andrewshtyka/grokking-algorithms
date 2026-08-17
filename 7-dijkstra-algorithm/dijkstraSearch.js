const graph = {
    A: { B: 19, C: 4 },
    B: { A: 19, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};

const result = dijkstraSearchMap(graph, "A");
console.log("result", result);

function dijkstraSearchMap(graph, start = "") {
    const distances = new Map();
    const visitedNodes = new Set();
    const queue = [start];
    const path = new Map();

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
                
                if (newDistance < distances.get(item)) {
                    distances.set(item, newDistance);
                    queue.push(item);
                    path.set(item, currentNode);
                };
            };
        };
    };

    const result = {};
    for (const el of distances.keys()) {
        result[el] = {
            distance: distances.get(el),
            path: buildPath(el, path)
        }
    }
    
    return result;
};

function buildPath(el, map) {
    const path = [];
    let currentEl = el;

    while (currentEl) {
        path.unshift(currentEl);
        currentEl = map.get(currentEl);
    };

    return path;
};