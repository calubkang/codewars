function race(v1, v2, g) {
    if (v1 >= v2) {
        return null
    }
    let totalSeconds = Math.floor(g / (v2 - v1) * 3600);
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60 % 60
    let hours = (totalSeconds - seconds - minutes * 60) / 3600
    return [hours, minutes, seconds]
}