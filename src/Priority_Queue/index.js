const PriorityQueue = require('./PriorityQueue');

const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
console.log(ER.values);
console.log('******************');
ER.dequeue();
console.log(ER.values);
console.log('******************');
ER.dequeue();
console.log(ER.values);
console.log('******************');
ER.dequeue();
console.log(ER.values);
console.log('******************');
