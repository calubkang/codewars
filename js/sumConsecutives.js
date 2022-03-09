function sumConsecutives(s) {
    let res = [];
    s.forEach((num, i, arr) => num === arr[i - 1] ? res[res.length - 1] += num : res.push(num))
    return res
}