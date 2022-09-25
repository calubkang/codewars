var mySqrt = function (x) {
  let y = 0
  while (y * y <= x) {
    ++y
  }
  return y - 1
};