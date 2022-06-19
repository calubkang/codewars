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
function lcmu(a, b) {
    if (a === b) {
        return Math.abs(a)
    }
    let min = Math.abs(Math.min(a, b));
    let max = Math.abs(Math.max(a, b));
    const increm = max
    while (max % min !== 0) {
        max += increm
    }
    return max
}
function som(a, b) {
    return a + b
}
function maxi(a, b) {
    return Math.max(a, b)
}
function mini(a, b) {
    return Math.min(a, b)
}
function operArray(fct, arr, init) {
    let res = [];
    arr.forEach((num, i) => {
        if (i === 0) {
            res.push(fct(init, num))
        } else {
            res.push(fct(res[res.length - 1], num))
        }
    })
    return res
}