var longestCommonPrefix = function (strs) {
  let res = '';
  let minLength = strs.sort((a, b) => a.length - b.length)[0].length;
  for (let i = 0; i < minLength; i++) {
    let currChar = strs[0][i];
    if (strs.every(word => word[i] === currChar)) {
      res += currChar
    } else {
      return res
    }
  }
  return res
};