function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now'
    }
    let time = [Math.floor(seconds / 31536000), Math.floor(seconds / 86400) % 365, Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
    let arrTime = time.map((t, i) => {
        if (t !== 0) {
            if (i === 0) {
                return t > 1 ? t + ' years' : t + ' year'
            } else if (i === 1) {
                return t > 1 ? t + ' days' : t + ' day'
            } else if (i === 2) {
                return t > 1 ? t + ' hours' : t + ' hour'
            } else if (i === 3) {
                return t > 1 ? t + ' minutes' : t + ' minute'
            } else if (i === 4) {
                return t > 1 ? t + ' seconds' : t + ' second'
            }
        } else {
            return t
        }
    })
        .filter(t => t !== 0)
        .reduce((res, t, i, arr) => {
            if (i === 0) {
                return res + t
            } else if (i === arr.length - 1) {
                return res + (' and ' + t)
            } else {
                return res + (', ' + t)
            }
        }, '')
    return arrTime
}