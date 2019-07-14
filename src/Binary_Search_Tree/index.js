const BST = require('./BinarySearchTree');
const BFS = require('../Tree_Traversal/BFS');
const { DFSPreOrder, DFSPostOrder, DFSInOrder } = require('../Tree_Traversal/DFS');

const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(`BFS: ${BFS(tree)}`);
console.log(`DFS-PreOrder: ${DFSPreOrder(tree)}`);
console.log(`DFS-PostOrder: ${DFSPostOrder(tree)}`);
console.log(`DFS-InOrder: ${DFSInOrder(tree)}`);
