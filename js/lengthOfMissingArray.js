function getLengthOfMissingArray(arrays) {
    if (arrays === null) {
        return 0
    }
    let lengths = arrays.map(arr => arr ? arr.length : 0);
    if (lengths.includes(0)) {
        return 0
    }
    let res
    lengths.sort((a, b) => a - b).forEach((l, i, array) => {
        if (lengths[i + 1] - l === 2) {
            res = l + 1
        }
    })
    return res ? res : 0
}