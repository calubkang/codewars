function backwardsPrime(start, stop) {
    let res = [];
    for (let i = start; i <= stop; i++) {
        if (isPrime(i) && isPrime(Number(String(i).split('').reverse().join(''))) && !isPalindrome(String(i))) {
            res.push(i)
        }
    }
    return res
}

function isPrime(num) {

    if (num < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('') ? true : false
}