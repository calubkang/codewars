function orderWeight(string) {
    let res = []
    let arr = string.split(' ').sort().map(num => [num, weight(num)]).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].toString() < b[0].toString() ? -1 : 1
        } else { return a[1] - b[1] }
    })
    arr.forEach(pair => res.push(pair[0]));
    return res.join(' ')

}



function weight(strNum) {
    let count = 0;
    for (let i = 0; i < strNum.length; i++) {
        count += Number(strNum[i])
    }
    return count
}