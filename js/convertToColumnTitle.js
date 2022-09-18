var convertToTitle = function (columnNumber) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let column = ''

  let digits = 0
  let temp = columnNumber;
  while (temp > 26) {
    digits++
    temp = Math.ceil(temp / 27);
  }

  for (let i = digits; i >= 0; i--) {
    let index = columnNumber % 26 ? columnNumber % 26 : 26
    column = alpha[index - 1] + column;
    columnNumber = Math.floor(columnNumber / 26) === columnNumber / 26 && i === 1 ? columnNumber / 26 - 1 : Math.floor(columnNumber / 26)
  }

  return column
};