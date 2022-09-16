var isSymmetric = function (root) {
  let queue;

  if (root.left && root.right) {
    queue = [root.left, root.right]
  } else if (!root.left && !root.right) {
    return true
  } else {
    return false
  }

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length / 2; i++) {
      let left = queue.shift();
      let right = queue.pop();
      if (left.val != right.val) return false
      if ((left.left ? !right.right : right.right) || (left.right ? !right.left : right.left)) {
        return false
      }
      left.left && queue.unshift(left.left);
      left.right && queue.unshift(left.right);
      right.right && queue.push(right.right);
      right.left && queue.push(right.left)
    }
  }
  return true
};