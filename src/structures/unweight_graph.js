class Graph {
	constructor() {
		this.adjencyList = {};
	}

	addVertex(vertexName) {
		if (!this.adjencyList[vertexName]) {
			this.adjencyList[vertexName] = [];
		}
	}
	addDirectedEdge(originVertex, destinationVertex) {
		this.adjencyList[originVertex].push(destinationVertex);
	}
	addUndirectedEdge(vertex1, vertex2) {
		this.adjencyList[vertex1].push(vertex2);
		this.adjencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(
			vertex => vertex !== vertex2
		);
		this.adjencyList[vertex2] = this.adjencyList[vertex2].filter(
			vertex => vertex !== vertex1
		);
	}
	removeVertex(vertexToremove) {
		for (let vertex in this.adjencyList[vertexToremove]) {
			const adjacentVertex = this.adjencyList[vertexToremove].pop();
			this.removeEdge(adjacentVertex, vertexToremove);
		}
		delete this.adjencyList[vertexToremove];
	}

	depthFirstTraversal_recursive(vertex) {
		const visited = {};
		const list = [];
		debugger;
		const dft = vertex => {
			debugger;
			if (!vertex) return;
			visited[vertex] = true;
			list.push(vertex);
			for (let edge of this.adjencyList[vertex]) {
				if (!visited[edge]) {
					dft(edge);
				}
			}
		};
		dft(vertex); //?
		return list;
	}

	breadthFirst_iterative(vertex) {
		const queue = [vertex];
		const results = [];
		const visited = {};
		let currentVertex;
		visited[vertex] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			results.push(currentVertex);
			this.adjencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return results;
	}
}

const graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');
graph.addUndirectedEdge('a', 'b');
graph.addUndirectedEdge('a', 'c');
graph.addUndirectedEdge('b', 'd');
graph.addUndirectedEdge('c', 'e');
graph.addUndirectedEdge('d', 'e');
graph.addUndirectedEdge('d', 'f');
graph.addUndirectedEdge('e', 'f');
console.log(graph);

graph.depthFirstTraversal_recursive('a'); //?

graph.breadthFirst_iterative('a'); //?
