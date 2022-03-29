function scoreThrows(radii) {
    let count = 0;
    if (radii.length === 0) {
        return 0
    }
    if (radii.every(r => r < 5 && r > 0)) {
        count += 100
    }
    radii.forEach(r => {
        if (r >= 5 && r <= 10) {
            count += 5
        } else if (r < 5) {
            count += 10
        }
    })
    return count
}