function minimumNumber(numbers) {
    let sum = numbers.reduce((s, x) => s + x, 0);

    let count = 0;
    while (!isPrime(sum)) {
        count++
        sum++
    }
    return count
}

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}