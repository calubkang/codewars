function squareDigits(num) {
    return Number(String(num).split('').map(dig => dig ** 2).join(''))
}