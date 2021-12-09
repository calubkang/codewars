function squareSum(numbers) {
    return numbers.reduce((sum, cur) => sum + cur ** 2, 0)
}