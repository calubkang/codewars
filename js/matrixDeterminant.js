function determinant(m) {
    let count = 0
    if (m.length === 1) {
        while (typeof m !== 'number') m = m[0];
        return m;
    } else {
        for (let c = 0; c < m.length; c++) {
            let newArr = []
            for (let r = 1; r < m.length; r++) {
                let newRow = [...m[r]];
                newRow.splice(c, 1);
                newArr.push(newRow);
            }
            c % 2 === 0 ? count += (m[0][c] * determinant(newArr)) : count -= (m[0][c] * determinant(newArr))
        }

    }
    return count
}