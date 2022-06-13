var whatTimeIsIt = function (angle) {
    let minutes = Math.floor(angle * 2);
    let hours = String(Math.floor(minutes / 60));
    if (hours === '0') hours = '12'
    minutes = String(minutes % 60);

    let HH = hours.length === 2 ? hours : '0' + hours;
    let MM = minutes.length === 2 ? minutes : '0' + minutes;

    return HH + ':' + MM
}