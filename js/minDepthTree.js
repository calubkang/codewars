var minDepth = function (root) {
  if (!root) return 0
  let count = 0;
  let queue = [root];
  while (queue.length) {
    count++
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.pop()
      if (!cur.left && !cur.right) return count
      cur.left && queue.unshift(cur.left);
      cur.right && queue.unshift(cur.right);
    }
  }
}
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null) return 1 + minDepth(root.right);
  if (root.right === null) return 1 + minDepth(root.left);
  return Math.min(1 + minDepth(root.left), 1 + minDepth(root.right));
};