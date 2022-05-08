function find_average(array) {
    return array == 0 ? 0 : array.reduce((s, x) => s + x, 0) / array.length
}