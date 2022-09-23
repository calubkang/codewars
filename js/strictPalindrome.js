var isStrictlyPalindromic = function (n) {
  let i = 2
  while (i <= n - 2) {
    if (!isPalindrome(n.toString(i))) {
      return false
    }
    i++
  }

  return true
};

function isPalindrome(str) {
  let reverse = str.split('').reduce((acc, char) => char + acc, '');
  return reverse === str
}