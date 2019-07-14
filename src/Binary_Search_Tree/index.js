const BST = require('./BinarySearchTree');

const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
tree.insert(13);
tree.insert(100);

console.log(tree.find(100));
