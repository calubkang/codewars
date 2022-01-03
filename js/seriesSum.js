function SeriesSum(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += 1 / (1 + 3 * i)
    }
    return count.toFixed(2)
}