function numericals(s) {
    let res = '';
    let counts = {};
    s.split('').forEach(char => {
        if (!counts[char]) {
            counts[char] = 1;
            res += String(counts[char])
        } else {
            counts[char]++;
            res += String(counts[char])
        }
    })
    return res
}