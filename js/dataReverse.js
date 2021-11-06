function dataReverse(data) {
    let groups = {};
    let reversed = []
    for (let i = 0; i < data.length; i += 8) {
        groups[i] = data.slice(i, i + 8);
    }
    for (let i = data.length - 8; i >= 0; i -= 8) {
        reversed.push(groups[i])
    }
    return reversed.flat()
}