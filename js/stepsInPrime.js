function isPrime(num) {
    if (num === 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function step(g, m, n) {
    for (let i = m; i <= n; i++) {
        if (isPrime(i) && isPrime(i + g)) {
            return [i, i + g]
        }
    }
    return null
}
