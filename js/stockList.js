function stockList(listOfArt, listOfCat) {
    let catCount = {}
    listOfCat.forEach(cat => {
        catCount[cat] = 0;
        listOfArt.forEach(bkCount => {
            if (bkCount.startsWith(cat)) {
                catCount[cat] += Number(bkCount.split(' ')[1])
            }
        })
    })
    let res = [];
    let totalCount = 0
    for (let cat in catCount) {
        res.push(`(${cat} : ${catCount[cat]})`);
        totalCount += catCount[cat];
    }
    return totalCount > 0 ? res.join(' - ') : ''
}