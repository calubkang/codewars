function countSquares(n) {
    let res = 0;
    for (let i = n; i > 0; i--) {
        res += i * i
    }
    return res
}