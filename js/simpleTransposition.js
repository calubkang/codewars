function simpleTransposition(text) {
    let row1 = '';
    let row2 = '';
    text.split('').forEach((char, i) => {
        i % 2 === 0 ? row1 += char : row2 += char
    })
    return row1 + row2
}