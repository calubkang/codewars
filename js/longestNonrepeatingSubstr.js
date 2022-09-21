var lengthOfLongestSubstring = function (s) {
  if (s === ' ') {
    return 1
  }
  let res = ''
  let cur = ''
  for (let i = 0; i < s.length; i++) {
    if (!cur.includes(s[i])) {
      cur += s[i]
    } else {
      res = res.length > cur.length ? res : cur;
      i -= (cur.length)
      cur = '';

    }
  }
  return cur.length > res.length ? cur.length : res.length
};