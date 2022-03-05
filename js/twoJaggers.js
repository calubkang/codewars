var nbrOfLaps = function (x, y) {

    let div = 1;
    for (let i = 2; i <= Math.min(x, y); i++) {
        if (x % i === 0 && y % i === 0) {
            div = i;
        }
    }
    return [y / div, x / div]
}