const Node = require('./Node');

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      this.values[parentIndex] &&
      this.values[childIndex] &&
      this.values[parentIndex].priority > this.values[childIndex].priority
    ) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) return;
    const min = this.values[0];
    this.swap(0, this.values.length - 1);
    this.values.pop();
    let parent = 0;
    let left = 1;
    let right = 2;
    while (
      (this.values[parent] && this.values[left] && this.values[parent].priority > this.values[left].priority) ||
      (this.values[parent] && this.values[right] && this.values[parent].priority > this.values[right].priority)
    ) {
      if (
        this.values[parent].priority > this.values[left].priority &&
        this.values[parent].priority > this.values[right].priority
      ) {
        if (this.values[right].priority > this.values[left].priority) {
          this.swap(parent, left);
          parent = left;
        } else {
          this.swap(parent, right);
          parent = right;
        }
      } else if (this.values[parent].priority > this.values[left].priority) {
        this.swap(parent, left);
        parent = left;
      } else {
        this.swap(parent, right);
        parent = right;
      }
      left = 2 * parent + 1;
      right = 2 * parent + 2;
    }
    return min;
  }
}

module.exports = PriorityQueue;
