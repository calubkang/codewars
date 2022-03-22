function shiftedDiff(first, second) {
    for (let i = 0; i < first.length; i++) {
        if (first === second) {
            return i
        }
        second = second.slice(1) + second[0];
    }
    return -1
}