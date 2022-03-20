function numPrimorial(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num)
        }
        num++
    }
    return primes.reduce((p, x) => p * x, 1)
}

// HELPER FUNCTION TO FIND PRIMES

function isPrime(num) {
    if (num === 2) {
        return true
    } else if (num === 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}