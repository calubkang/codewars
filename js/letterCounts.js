function letterCount(s) {
    let res = {};
    s.split('').forEach(char => res[char] ? res[char]++ : res[char] = 1);
    return res
}