function sqInRect(lng, wdth) {
    if (lng === wdth) {
        return null
    }
    let res = [];
    while (lng !== 0 && wdth !== 0) {
        if (lng > wdth) {
            res.push(wdth);
            lng -= wdth
        }
        if (wdth > lng) {
            res.push(lng);
            wdth -= lng
        }
        if (wdth === lng) {
            res.push(wdth);
            lng = 0;
            wdth = 0
        }
    }
    return res
}