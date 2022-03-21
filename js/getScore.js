function getScore(n) {
    let inc = 50;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += inc * i
    }
    return count
}