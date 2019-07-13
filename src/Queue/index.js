const Queue = require('./Queue');

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
