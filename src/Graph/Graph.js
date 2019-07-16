const Stack = require('../Stack/Stack');
const Queue = require('../Queue/Queue');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    if (vertex1 === vertex2) return;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    if (vertex1 === vertex2) return;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const traverse = vertex => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      const neighbors = this.adjacencyList[vertex];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) traverse(neighbor);
      }
    };
    traverse(start);
    return result;
  }

  DFSIterative(start) {
    const result = [];
    const visited = {};
    const stack = new Stack();
    stack.push(start);
    let currentVertex;
    while (stack.size !== 0) {
      currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
      }
      const neighbors = this.adjacencyList[currentVertex];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) stack.push(neighbor);
      }
    }
    return result;
  }

  BFS(start) {
    const result = [];
    const visited = {};
    const queue = new Queue();
    queue.enqueue(start);
    let currentVertex;
    while (queue.size !== 0) {
      currentVertex = queue.dequeue();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
      }
      const neighbors = this.adjacencyList[currentVertex];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) queue.enqueue(neighbor);
      }
    }
    return result;
  }
}

module.exports = Graph;
