function minSum(arr) {
  let res = 0
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length / 2; i++) {
    res += sortedArr[i] * sortedArr[arr.length - 1 - i]
  }
  return res
}