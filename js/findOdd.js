function findOdd(A) {
    let numCount = {};
    for (let num of A) {
        numCount[num] ? numCount[num]++ : numCount[num] = 1
    }
    return parseInt(Object.keys(numCount).find(key => numCount[key] % 2 !== 0))
}