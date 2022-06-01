function game(n) {
    let res = n ** 2;
    return res % 2 === 0 ? [res / 2] : [res, 2]
}