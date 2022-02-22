var solution = function (firstArray, secondArray) {
    return (firstArray.map((num, i) => (Math.abs(num - secondArray[i])) ** 2).reduce((s, x) => s + x, 0)) / firstArray.length
}