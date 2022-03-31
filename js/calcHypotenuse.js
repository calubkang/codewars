function calculateHypotenuse(a, b) {
    if (a < 1 || b < 1 || isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        throw 'not a number'
    }
    return Math.sqrt(a * a + b * b).toFixed(3)
}