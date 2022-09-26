var filterString = function (value) {
  let numString = value.split("").filter(char => Number(char) || char === '0').join('')

  return Number(numString)
}