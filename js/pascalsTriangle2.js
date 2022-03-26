function pascal(depth) {
    let res = [];
    for (let i = 0; i < depth; i++) {
        let lastRow = res[res.length - 1];
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(lastRow[j] + lastRow[j - 1])
            }
        }
        res.push(row);
    }
    return res;
}