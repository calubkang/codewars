function digitize(n) {
    return String(n).split('').reverse().map(char => Number(char))
}