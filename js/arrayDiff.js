function arrayDiff(a, b) {
    return a.filter(ele => !b.includes(ele))
}