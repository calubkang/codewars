function count(string) {
    let res = {};
    string.split('').forEach(char => res[char] ? res[char]++ : res[char] = 1);
    return res
}