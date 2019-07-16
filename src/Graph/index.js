const Graph = require('./Graph');

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Hong Kong');
graph.addVertex('Aspan');
graph.addVertex('Los Angeles');

graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Hong Kong');
graph.addEdge('Dallas', 'Aspan');
graph.addEdge('Dallas', 'Hong Kong');
graph.addEdge('Dallas', 'Los Angeles');
graph.addEdge('Hong Kong', 'Los Angeles');

const AlphabetGraph = new Graph();

AlphabetGraph.addVertex('A');
AlphabetGraph.addVertex('B');
AlphabetGraph.addVertex('C');
AlphabetGraph.addVertex('D');
AlphabetGraph.addVertex('E');
AlphabetGraph.addVertex('F');

AlphabetGraph.addEdge('A', 'B');
AlphabetGraph.addEdge('A', 'C');
AlphabetGraph.addEdge('B', 'D');
AlphabetGraph.addEdge('C', 'E');
AlphabetGraph.addEdge('D', 'E');
AlphabetGraph.addEdge('D', 'F');
AlphabetGraph.addEdge('E', 'F');

console.log(AlphabetGraph.DFSRecursive('A'));
console.log(AlphabetGraph.DFSIterative('A'));
console.log(AlphabetGraph.BFS('A'));
