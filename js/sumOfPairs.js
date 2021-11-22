function sumPairs(ints, s) {
    let intSet = new Set();
    intSet.add(ints[0]);
    for (let i = 1; i < ints.length; i++) {
        if (intSet.has(s - ints[i])) {
            return [s - ints[i], ints[i]]
        }
        intSet.add(ints[i])
    }
    return undefined
}