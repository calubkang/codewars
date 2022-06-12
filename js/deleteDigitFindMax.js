function deleteDigit(n) {

    let numString = String(n);
    let nums = [];

    for (let i = 0; i < numString.length; i++) {
        nums.push(Number(numString.slice(0, i) + numString.slice(i + 1)))
    }

    return Math.max(...nums)
}