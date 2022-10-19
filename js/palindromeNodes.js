var isPalindrome = function (head) {
  let single = head;
  let double = head;
  while (double && double.next) {
    single = single.next
    double = double.next.next;
  }
  single = reversed(single);
  double = head;
  while (single) {
    if (single.val !== double.val) {
      return false
    }
    single = single.next;
    double = double.next
  }
  return true
};

function reversed(head) {
  let prev = null;
  let next
  while (head) {
    next = head.next
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev
}