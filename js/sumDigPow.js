function sumDigPow(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) {
        if (String(i).split('').reduce((sum, dig, index) => sum + Number(dig) ** (index + 1), 0) === i) {
            res.push(i)
        }
    }
    return res
}