function solution(str) {
    if (str.length % 2 !== 0) {
        str = str + '_'
    }
    let res = [];
    for (let i = 0; i < str.length; i += 2) {
        res.push(str.substr(i, 2))
    }
    return res
}