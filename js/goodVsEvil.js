function goodVsEvil(good, evil) {
    let goodWorth = [1, 2, 3, 3, 4, 10], evilWorth = [1, 2, 2, 2, 3, 5, 10];
    let goodTotal = good.split(' ').reduce((s, x, i) => s + Number(x) * goodWorth[i], 0);
    let evilTotal = evil.split(' ').reduce((s, x, i) => s + Number(x) * evilWorth[i], 0);
    if (goodTotal > evilTotal) {
        return 'Battle Result: Good triumphs over Evil'
    } else if (evilTotal > goodTotal) {
        return 'Battle Result: Evil eradicates all trace of Good'
    } else {
        return 'Battle Result: No victor on this battle field'
    }
}