var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    if (!a) {
      a = headB
    } else {
      a = a.next
    }
    if (!b) {
      b = headA
    } else {
      b = b.next
    }

  }
  return a
};