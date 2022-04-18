function foldArray(array, runs) {
    let res = [];
    for (let i = 0; i < array.length / 2; i++) {
        i !== Math.floor(array.length / 2) ? res.push(array[i] + array[array.length - 1 - i]) : res.push(array[i])
    }
    if (runs > 1) {
        return foldArray(res, runs - 1)
    }
    return res
}