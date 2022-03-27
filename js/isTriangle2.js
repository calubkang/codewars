function isTriangleNumber(number) {
    if (parseInt(number) !== number) {
        return false
    } else if (number === 0) {
        return true
    }
    let count = 0;
    let r = 1;
    while (count <= number) {
        count = r * (r + 1) / 2;
        if (count === number) {
            return true
        } else if (count > number) {
            return false
        }
        r++
    }

}