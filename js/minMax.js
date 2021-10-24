function minMax(arr) {
    let minAndMax = [];
    minAndMax.push(Math.min(...arr));
    minAndMax.push(Math.max(...arr));
    return minAndMax
}