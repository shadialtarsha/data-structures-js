const MaxBinaryHeap = require('./MaxBinaryHeap');
const MinBinaryHeap = require('./MinBinaryHeap');

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

maxHeap.extractMax();

console.log(maxHeap.values);
console.log('---------------------');
const minHeap = new MinBinaryHeap();
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(13);
minHeap.insert(20);

minHeap.extractMin();

console.log(minHeap.values);
