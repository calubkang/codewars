/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
    if ((a + b + c) / 2 <= Math.max(a, b, c)) {
        return 0
    }
    return a ** 2 + b ** 2 + c ** 2 < 2 * (Math.max(a, b, c)) ** 2 ? 3 : (a ** 2 + b ** 2 + c ** 2 === 2 * (Math.max(a, b, c)) ** 2 ? 2 : 1)
}