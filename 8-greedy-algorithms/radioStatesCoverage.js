function radioStatesCoverage() {
    const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
    
    const stations = new Map();
    stations.set("kone", new Set(["id", "nv", "ut"]));
    stations.set("ktwo", new Set(["wa", "id", "mt"]));
    stations.set("kthree", new Set(["or", "nv", "ca"]));
    stations.set("kfour", new Set(["nv", "ut"]));
    stations.set("kfive", new Set(["ca", "az"]));

    const finalStations = new Set();

    while (statesNeeded.size > 0) {
        let bestStation = null;
        let statesCovered = new Set();        

        for (const [station, statesForStation] of stations.entries(stations)) {
            const covered = statesNeeded.intersection(statesForStation);

            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }
        
        statesCovered.forEach(state => {
            statesNeeded.delete(state);
        })
        finalStations.add(bestStation);
    };

    return finalStations;
};

const result = radioStatesCoverage();
console.log(result);
