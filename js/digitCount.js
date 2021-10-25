function nbDig(n, d) {
    let squares = [];
    let count = 0;
    for (let i = 0; i <= n; i++) {
        squares.push((i ** 2).toString())
    }
    let stringSquare = squares.join('');
    for (let i = 0; i < stringSquare.length; i++) {
        if (stringSquare[i] === d.toString()) {
            count += 1
        }
    }
    return count;
}