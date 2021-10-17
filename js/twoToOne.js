function longest(s1, s2) {
    let res = '';
    let combinedArr = (s1 + s2).split('').sort();
    combinedArr.forEach(char => {
        if (!res.includes(char)) {
            res += char;
        }
    })
    return res
}