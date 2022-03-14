function numberOfPairs(gloves) {
    let res = {};
    let count = 0;
    gloves.forEach(glove => res[glove] ? res[glove] += 0.5 : res[glove] = 0.5);
    for (let pairs in res) {
        count += Math.floor(res[pairs])
    }
    return count
}