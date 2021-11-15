function beggars(values, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < values.length; j += n) {
            sum += values[j];
        }
        res.push(sum)
    }
    return res
}