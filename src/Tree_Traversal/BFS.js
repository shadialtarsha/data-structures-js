const Queue = require('../Queue/Queue');

function BFS(tree) {
  if (!tree.root) return null;
  const queue = new Queue();
  const data = [];
  let current;
  queue.enqueue(tree.root);
  while (queue.size !== 0) {
    current = queue.dequeue();
    data.push(current.val);
    if (current.left) {
      queue.enqueue(current.left);
    }
    if (current.right) {
      queue.enqueue(current.right);
    }
  }
  return data;
}

module.exports = BFS;
