var plusOne = function (digits) {
  digits[digits.length - 1] += 1;
  while (digits.includes(10)) {
    let index = digits.indexOf(10)
    if (index === 0) {
      digits[0] = 0;
      digits.unshift(1)
    } else {
      digits[index] = 0
      digits[index - 1] += 1;
    }
  }
  return digits
  // return String(Number(digits.join('')) + 1).split('')

};