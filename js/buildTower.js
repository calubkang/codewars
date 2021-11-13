function towerBuilder(nFloors) {
    let res = [];
    for (i = 1; i <= nFloors; i++) {
        res.push(" ".repeat(nFloors - i) + "*".repeat(i * 2 - 1) + " ".repeat(nFloors - i))
    }
    return res
}