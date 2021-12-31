function perimeter(n) {
    let perims = [4, 4];
    for (let i = 2; i <= n; i++) {
        perims.push(perims[i - 2] + perims[i - 1])
    }
    return perims.length === 2 ? 4 + 4 * n : perims.reduce((s, x) => s + x)
}