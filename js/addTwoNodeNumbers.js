var addTwoNumbers = function (l1, l2) {
  const res = new ListNode(null);
  let cur = res;
  let carry;
  while (l1 || l2) {
    let curSum
    if (!l1) {
      curSum = l2.val
    } else if (!l2) {
      curSum = l1.val
    } else {
      curSum = l1.val + l2.val;
    }


    if (carry) {
      cur.next = new ListNode((1 + curSum) % 10);
      cur = cur.next;
      if (curSum < 9) {
        carry = false;
      }
    } else {
      cur.next = new ListNode(curSum % 10);
      cur = cur.next
      if (curSum >= 10) {
        carry = true
      }
    }
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry) {
    cur.next = new ListNode(1)
  }
  return res.next
};