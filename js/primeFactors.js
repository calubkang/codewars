function primeFactors(n) {
    let res = [];
    let i = 2;
    while (!isPrime(n)) {
        while (n % i === 0 && isPrime(i)) {
            res.push(i);
            n /= i
        }
        i++
    }
    if (n > 1) { res.push(n) }
    return res
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}