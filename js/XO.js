function XO(str) {
    let count = 0;
    str.toLowerCase().split('').forEach(char => {
        if (char === 'x') {
            count++
        } else if (char === 'o') {
            count--
        }
    })
    return count === 0
}