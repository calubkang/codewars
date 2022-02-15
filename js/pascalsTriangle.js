function pascalsTriangle(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            res.push(1)
        } else {
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    res.push(1)
                } else {
                    res.push(res[res.length - i] + res[res.length - i - 1])
                }
            }
        }
    }
    return res
}