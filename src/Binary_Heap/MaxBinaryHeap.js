class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }

  insert(val) {
    this.values.push(val);
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (this.values[parentIndex] && this.values[childIndex] && this.values[parentIndex] < this.values[childIndex]) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this;
  }

  extractMax() {
    if (this.values.length === 0) return;
    const max = this.values[0];
    this.swap(0, this.values.length - 1);
    this.values.pop();
    let parent = 0;
    let left = 1;
    let right = 2;
    while (
      (this.values[parent] && this.values[left] && this.values[parent] < this.values[left]) ||
      (this.values[parent] && this.values[right] && this.values[parent] < this.values[right])
    ) {
      if (this.values[parent] < this.values[left] && this.values[parent] < this.values[right]) {
        if (this.values[left] > this.values[right]) {
          this.swap(parent, left);
          parent = left;
        } else {
          this.swap(parent, right);
          parent = right;
        }
      } else if (this.values[parent] < this.values[left]) {
        this.swap(parent, left);
        parent = left;
      } else {
        this.swap(parent, right);
        parent = right;
      }
      left = 2 * parent + 1;
      right = 2 * parent + 2;
    }
    return max;
  }
}

module.exports = MaxBinaryHeap;
