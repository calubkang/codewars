var isSameTree = function (p, q) {
  if (!p ^ !q) {
    return false
  } else if (!p && !q) {
    return true
  }
  let [pq, qq] = [[p], [q]];
  while (pq.length && qq.length) {
    const [pLength, qLength] = [pq.length, qq.length]
    if (pLength != qLength) {
      return false
    }
    for (let i = 0; i < pLength; i++) {
      let [pCur, qCur] = [pq.pop(), qq.pop()];
      if ((pCur.val != qCur.val) || (!pCur.left ^ !qCur.left) || (!pCur.right ^ !qCur.right)) {
        return false
      }
      pCur.left && pq.unshift(pCur.left)
      qCur.left && qq.unshift(qCur.left)
      pCur.right && pq.unshift(pCur.right)
      qCur.right && qq.unshift(qCur.right)
    }
  }
  return true
};