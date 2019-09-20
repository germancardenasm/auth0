class weightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertexName) {
		if (!this.adjacencyList[vertexName]) {
			this.adjacencyList[vertexName] = [];
		}
	}

	addUndirectedEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
}

const graph = new weightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addUndirectedEdge('A', 'B', 9);
graph.addUndirectedEdge('A', 'C', 5);
graph.addUndirectedEdge('B', 'C', 7);
console.table(graph.adjacencyList);
