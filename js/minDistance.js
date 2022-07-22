function minDistance(n) {
    let factors = [];
    if (Math.sqrt(n) % 1 === 0) {
        factors.push(Math.sqrt(n))
    }
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            factors.push(n / i)
        }
    }
    factors.sort((a, b) => a - b);
    let res = factors[1] - factors[0]
    for (let i = 1; i < factors.length - 1; i++) {
        let diff = factors[i + 1] - factors[i];
        if (diff < res) {
            res = diff
        }
    }
    return res
}