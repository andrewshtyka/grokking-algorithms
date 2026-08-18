/**
 * 18 aug 2026
 * 1. binary search (done)
 * 2. binary search recursive (done)
 * 3. quicksort (done)
 * 4. bfs (done)
 * 5. dijkstra (done)
 */
// const inputBinary = [-204, -93, -8, 4, 12, 23, 294, 2009, 10039];
// const inputQuickSort = [234, -9, 0, -194, 256, 24, 29, 200, 10];

// const inputBFS = {
//     andrew: ["bob", "alex"],
//     bob: ["kimi", "lewis"],
//     alex: ["mary"],
//     kimi: ["kelly"],
//     lewis: [],
//     mary: [],
//     kelly: [],
// };

const inputDijkstra = {
    a: { b: 1, c: 8 },
    b: { a: 1, c: 5, d: 6 },
    c: { a: 8, b: 5, d: 9 },
    d: { b: 6, c: 9 },
};

const result = dijkstraSearch(inputDijkstra, "a");
console.log(result);

function dijkstraSearch(graph, startItem = "") {
    const queue = [startItem];
    const visitedNodes = new Set();
    const distances = {};

    for (const item in graph) {
        distances[item] = Infinity;
    };
    distances[startItem] = 0;

    const path = new Map();

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (!visitedNodes.has(currentNode)){
            visitedNodes.add(currentNode);

            const neighbours = graph[currentNode];

            for (const item in neighbours) {
                const newDistance = distances[currentNode] + neighbours[item];

                if (newDistance < distances[item]) {
                    distances[item] = newDistance;
                    queue.push(item);
                    path.set(item, currentNode);
                }
            }
        }
    }

    const result = {};
    for (const node in distances) {
        result[node] = {
            distance: distances[node],
            path: getPath(node, path)
        }
    }
    return result;
};


function getPath(node, map) {
    const path = [];
    let current = node;

    while (current) {
        path.unshift(current);
        current = map.get(current);
    }

    return path;
}