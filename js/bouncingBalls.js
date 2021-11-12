function bouncingBall(h, bounce, window) {
    if (bounce >= 1 || window >= h || bounce < 0) {
        return -1
    }
    let height = h;
    let count = 0;
    while (height > window) {
        count += 1;
        if (height * bounce > window) {
            count += 1
        }
        height *= bounce
    }
    return count
}