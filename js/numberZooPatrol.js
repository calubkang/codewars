function findNumber(array) {
    let expected = (array.length + 1) * (array.length + 2) / 2;
    return array.reduce((s, x) => s - x, expected)
}