function DFSPreOrder(tree) {
  if (!tree.root) return null;
  const data = [];
  function treverse(node) {
    data.push(node.val);
    if (node.left) {
      treverse(node.left);
    }
    if (node.right) {
      treverse(node.right);
    }
  }
  treverse(tree.root);
  return data;
}

function DFSPostOrder(tree) {
  if (!tree.root) return null;
  const data = [];
  function treverse(node) {
    if (node.left) {
      treverse(node.left);
    }
    if (node.right) {
      treverse(node.right);
    }
    data.push(node.val);
  }
  treverse(tree.root);
  return data;
}

function DFSInOrder(tree) {
  if (!tree.root) return null;
  const data = [];
  function treverse(node) {
    if (node.left) {
      treverse(node.left);
    }
    data.push(node.val);
    if (node.right) {
      treverse(node.right);
    }
  }
  treverse(tree.root);
  return data;
}

module.exports = { DFSPreOrder, DFSPostOrder, DFSInOrder };
