const DoublyLinkedList = require('./DoublyLinkedList');

const list = new DoublyLinkedList();
list.push('Hi');
list.push('Hello');
list.push('There');
list.push('Shadi');
list.reverse();

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
