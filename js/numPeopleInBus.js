var number = function (busStops) {
    let count = 0;
    busStops.forEach(stop => {
        count += stop[0], count -= stop[1]
    })
    return count
}