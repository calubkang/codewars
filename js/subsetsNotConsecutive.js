function f(n) {
  let [a, b] = [1, 0];
  let temp;

  while (n > 1) {
    temp = a;
    a = a + b + 1;
    b = temp;
    n--
  }
  return a
}