function Xbonacci(signature, n) {
    const length = signature.length;
    if (length >= n) {
        return signature.slice(0, n)
    }
    while (signature.length < n) {
        signature.push(signature.slice(signature.length - length).reduce((s, i) => s + i, 0))
    }
    return signature
}