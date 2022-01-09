function digPow(n, p) {
    let count = 0;
    String(n).split('').forEach((digit, i) => count += digit ** (p + i));
    return Number.isInteger(count / n) ? count / n : -1
}