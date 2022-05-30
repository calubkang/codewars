function twistedSum(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += String(i)
            .split('')
            .reduce((s, dig) => s + Number(dig), 0)
    }
    return count
}