var beeramid = function (bonus, price) {

    if (price > bonus) {
        return 0
    }

    let beers = bonus / price;
    let level = 1;
    while (beers >= 0) {
        beers -= level ** 2;
        if (beers < (level + 1) ** 2) {
            return level
        }
        level++
    }
    return 0
}