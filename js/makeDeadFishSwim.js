function parse(data) {
    let count = 0;
    let res = [];
    data.split('').forEach(com => {
        if (com === 'i') {
            count++
        } else if (com === 'd') {
            count--
        } else if (com === 's') {
            count *= count
        } else if (com === 'o') {
            res.push(count)
        }
    })
    return res
}