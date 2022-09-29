function newAvg(arr, newavg) {
  let res = newavg * (arr.length + 1) - arr.reduce((s, x) => s + x, 0);
  if (res >= 0) {
    return Math.ceil(res)
  } else {
    throw ('Expected New Average is too low')
  }
}