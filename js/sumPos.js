function positiveSum(arr) {
    let count = 0;
    arr.forEach(num => {
        if (num > 0) {
            count += num
        }
    })
    return count
}