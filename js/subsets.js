function estSubsets(arr) {
  let size = [...new Set(arr)].length;
  let res = 0
  let inc = 1
  while (size > 0) {
    res += inc;
    inc *= 2;
    size--
  }
  return res
}