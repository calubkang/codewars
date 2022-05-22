function peelTheOnion(s, d) {
    let res = [];

    while (s > 1) {
        res.push(s ** d - (s - 2) ** d);
        s -= 2
    }

    if (s === 1)
        res.push(1);

    return res
} 