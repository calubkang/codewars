multiplicationTable = function (size) {
    let res = [];
    for (let i = 1; i <= size; i++) {
        let temp = [];
        for (let j = 1; j <= size; j++) {
            temp.push(i * j)
        }
        res.push(temp)
    }
    return res
}