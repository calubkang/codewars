function gap(g, m, n) {
    let primes = [];
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    for (let i = 0; i < primes.length; i++) {
        if (primes[i + 1] - primes[i] === g) {
            return [primes[i], primes[i + 1]]
        }
    }
    return null
}

let isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}