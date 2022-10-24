var deleteNode = function (node) {
  let nextNode = node.next.next;
  node.val = node.next.val;
  node.next = nextNode
};