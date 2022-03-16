function twosDifference(input) {
    let res = [];
    input.forEach(num => {
        if (input.includes(num + 2)) {
            res.push([num, num + 2])
        }
    })
    return res
}