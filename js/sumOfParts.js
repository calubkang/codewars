function partsSums(ls) {
    if (ls.length === 0) {
        return [0]
    }
    let sum = ls.reduce((s, n) => s + n, 0);
    let res = [sum];
    ls.forEach(num => {
        sum -= num;
        res.push(sum)
    })
    return res
}