function arithmetic(a, b, operator) {
    const arith = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
    }
    return arith[operator](a, b)
}