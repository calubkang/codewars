function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    let counts = {
        long: 0,
        lat: 0
    };
    walk.forEach(dir => {
        if (dir === 'n') {
            counts.long++
        } else if (dir === 's') {
            counts.long--
        } else if (dir === 'e') {
            counts.lat++
        } else {
            counts.lat--
        }
    })
    return counts.long === 0 && counts.lat === 0
}