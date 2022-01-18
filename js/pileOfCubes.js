function findNb(m) {
    let volume = m;
    let c = 1
    while (volume > 0) {
        volume -= c ** 3;
        c++;
    }
    c--
    return volume === 0 ? c : -1
}