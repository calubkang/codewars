function longestRepetition(s) {
    if (s === '') {
        return ["", 0];
    }
    let res = ['', 0];
    let count = 1;
    s.split('').forEach((char, i, arr) => {
        if (arr[i + 1] === char) {
            count++
        } else {
            if (count > res[1]) {
                res = [char, count];
            }
            count = 1
        }
    })
    return res
}