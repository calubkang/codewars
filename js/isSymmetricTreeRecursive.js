var isSymmetric = function (root) {
  return check(root, root);

  function check(left, right) {
    if (!left) {
      return !right
    }
    if (!right) {
      return false
    }
    if (left.val !== right.val) return false
    return check(left.left, right.right) && check(left.right, right.left)
  }
};