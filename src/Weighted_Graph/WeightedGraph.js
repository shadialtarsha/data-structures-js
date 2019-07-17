const PriorityQueue = require('../Priority_Queue/PriorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    if (vertex1 === vertex2) return;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    if (vertex1 === vertex2) return;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex.node !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex.node !== vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v.node);
    }
    delete this.adjacencyList[vertex];
  }

  // Dijkstra's Algorithm
  findShortestPath(start, finsih) {
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (queue.values.length !== 0) {
      smallest = queue.dequeue().val;
      if (smallest === finsih) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            queue.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(start).reverse();
  }
}

module.exports = WeightedGraph;
