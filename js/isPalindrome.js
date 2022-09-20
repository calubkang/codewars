var isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  return str.split('').reduce((acc, x) => x + acc, '') === str
};