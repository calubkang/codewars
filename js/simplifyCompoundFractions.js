function simplify(integer, numerator, denominator) {
    if (numerator === 0 || denominator === 0) {
        return [integer, 0, 0]
    }
    let res = [];

    res.push(integer + Math.floor(numerator / denominator));

    numerator = numerator % denominator;
    let gcd = gcdi(numerator, denominator);

    res.push(numerator / gcd);
    res.push(denominator / gcd);

    return res
}

function factors(x) {
    let res = [];
    if (Math.sqrt(Math.abs(x)) % 1 === 0) {
        res.push(Math.sqrt(Math.abs(x)))
    }
    x = Math.abs(x)
    for (let i = 1; i < Math.sqrt(x); i++) {
        if (x % i === 0) {
            res.push(i);
            res.push(x / i)
        }
    }
    return res
}

function gcdi(x, y) {
    let xFactors = factors(x);
    let yFactors = factors(y);
    return Math.max(...xFactors.filter(num => yFactors.includes(num)))
}