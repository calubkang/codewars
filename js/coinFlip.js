function lightBulbs(lights, n) {

    let res = lights;

    while (n--) {
        res = res.map((bulb, i) => res[(i || res.length) - 1] ? Math.abs(1 - bulb) : bulb)
    }

    return res

}