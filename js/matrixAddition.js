function matrixAddition(a, b) {
    return a.map((row, rowIndex, rows) => {
        return row.map((num, i, nums) => {
            return num + b[rowIndex][i]
        })
    })
}