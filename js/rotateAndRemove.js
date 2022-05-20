function rotateAndRemove(arr) {
    let rotatedArr = [];
    let newRow;
    for (let c = arr[0].length - 1; c >= 0; c--) {
        newRow = []
        for (let r = 0; r < arr.length; r++) {
            newRow.push(arr[r][c])
        }
        rotatedArr.push(newRow)
    }
    let removedArr = rotatedArr.map(row => {
        row.splice(row.indexOf(Math.min(...row)), 1);
        row.splice(row.indexOf(Math.max(...row)), 1);
        return row
    })
    if (removedArr.length !== 1) {
        return rotateAndRemove(removedArr)
    }
    return removedArr[0][0]
}