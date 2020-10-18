function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {
                    place: destination,
                    address: p.address
                };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}
let first = new VillageState(
    "Post Office",
    [{
        place: "Post Office",
        address: "Alice's House"
    }]
);
let next = first.move("Alice's House");
console.log(next.place);