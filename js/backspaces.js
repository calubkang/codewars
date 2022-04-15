function cleanString(s) {
    let res = '';
    s.split('').forEach(char => char === '#' ? res = res.slice(0, res.length - 1) : res += char);
    return res
}