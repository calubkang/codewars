function tribonacci(signature, n) {
    if (n <= 3) {
        return signature.splice(0, n)
    }
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1])
    }
    return signature
}