function persistence(num, count = 0) {
    let run = String(num).split('').reduce((p, n) => p * n, 1);
    if (String(num).length === 1) {
        return count
    } else {
        count++;
        return persistence(run, count)
    }
}