class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}

function sortNodesToArr(head) {
  let res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.sort((a, b) => b - a)
}

var sortList = function (head) {
  if (!head) return null;
  let res;
  let sortedNodes = sortNodesToArr(head)
  for (let i = 0; i < sortedNodes.length; i++) {
    res = new Node(sortedNodes[i], res)
  }
  return res
};