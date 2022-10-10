var isPalindrome = function (x) {
  if (x >= 0) {
    if (String(x).length === 1) {
      return true
    } else {
      if (x === reverseNum(x)) {
        return true
      }
    }
  } else {
    return false
  }
  return false
};