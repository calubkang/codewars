var invertTree = function (root) {
  if (!root) return null;
  let left = invertTree(root.right)
  let right = invertTree(root.left)
  root.right = right;
  root.left = left;
  return root
};