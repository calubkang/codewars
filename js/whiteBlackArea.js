function whiteBlackAreas(cols, rows) {
    let h1 = 0, h2 = 0, w1 = 0, w2 = 0;
    for (let i = 0; i < cols.length; i++) {
        if (i % 2 === 0) {
            w1 += cols[i];
            h1 += rows[i]
        } else {
            w2 += cols[i];
            h2 += rows[i]
        }
    }
    return [w1 * h1 + w2 * h2, w1 * h2 + w2 * h1]
}