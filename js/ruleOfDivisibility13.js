function thirt(n) {
    let arrNum = n.toString().split('').reverse();
    let sum = 0
    arrNum.forEach((num, i) => sum += (num * ((10 ** i) % 13)));
    if (sum === n) {
        return sum
    } else { return thirt(n = sum) }
}