const SinglyLinkedList = require('./SinglyLinkedList');

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.reverseRecursively();
console.log(JSON.stringify(list));
