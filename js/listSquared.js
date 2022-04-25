function listSquared(m, n) {
    let res = [];
    for (let i = m; i <= n; i++) {
        let temp = [];
        if (i === 1) {
            temp.push(1)
        }
        for (let j = 1; j < Math.sqrt(i); j++) {
            if (i % j === 0) {
                temp.push(j, i / j);
            }
        }
        let squareSummed = temp.reduce((s, x) => s + (x ** 2), 0);
        if (Number.isInteger(Math.sqrt(squareSummed))) {
            res.push([i, squareSummed])
        }
    }
    return res
}