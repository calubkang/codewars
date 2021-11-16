function highestRank(arr) {
    let rank = {};
    arr.forEach(num => rank[num] ? rank[num] += 1 : rank[num] = 1);
    let rankArr = [];
    for (let num in rank) {
        rankArr.push([num, rank[num]])
    }
    rankArr.sort((a, b) => a[1] - b[1]);
    return parseInt(rankArr[rankArr.length - 1][0])

}