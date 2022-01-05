function diamond(n) {
    let diam = ''
    if (n % 2 === 0 || n < 0) {
        return null
    }
    for (let i = 1; i <= n; i++) {
        diam += ' '.repeat(Math.abs(Math.ceil(n / 2) - i)) + '*'.repeat(n - 2 * (Math.abs(Math.ceil(n / 2) - i))) + '\n'
    }
    return diam
}