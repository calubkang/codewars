function primeFactors(n) {
    let counts = {}
    let num = 2;
    while (n !== 1) {
        if (isPrime(num)) {
            while (n % num === 0) {
                n /= num;
                counts[num] ? counts[num]++ : counts[num] = 1;
            }
        }
        num++
    }
    let res = '';
    for (let prime in counts) {
        counts[prime] === 1 ? res += `(${prime})` : res += `(${prime}**${counts[prime]})`
    }
    return res
}

function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}