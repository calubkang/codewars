function encode(str, n) {
    let alpha = ' abcdefghijklmnopqrstuvwxyz';
    let key = String(n).split('').map(num => Number(num))
    let res = [];
    str.split('').forEach((char, i) => {
        res.push(alpha.indexOf(char) + key[i % key.length])
    })
    return res
}
