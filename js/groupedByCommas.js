function groupByCommas(n) {
    return String(n)
        .split('')
        .reverse()
        .map((char, i) => i % 3 === 0 && i !== 0 ? char + ',' : char).reverse().join('')
}