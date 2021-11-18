function balance(left, right) {
    let leftCount = 0;
    let rightCount = 0;
    let leftArr = left.split('');
    let rightArr = right.split('')
    leftArr.forEach(char => char === '!' ? leftCount += 2 : leftCount += 3);
    rightArr.forEach(char => char === '!' ? rightCount += 2 : rightCount += 3);
    if (leftCount > rightCount) {
        return 'Left'
    } else if (rightCount > leftCount) {
        return 'Right'
    } else {
        return "Balance"
    }
}