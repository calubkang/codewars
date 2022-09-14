var isBalanced = function (root) {
  if (!root) return true;
  return height(root) !== -1
};

var height = function (node) {
  if (!node) return 0;
  let left = height(node.left);
  let right = height(node.right);
  let bf = Math.abs(left - right)

  if (bf > 1 || left == -1 || right == -1) return -1
  return 1 + Math.max(left, right)
}