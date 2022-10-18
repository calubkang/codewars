var hasCycle = function (head) {
  if (!head || !head.next || !head.next.next) return false
  let fast = head.next.next;
  let slow = head.next;
  while (fast && fast.next) {
    if (fast == slow) {
      return true
    }
    fast = fast.next.next;
    slow = slow.next
  }
  return false
};