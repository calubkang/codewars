function timeMath(time1, op, time2) {
    let totalSec;
    if (op === '+')
        totalSec = timeToSec(time1) + timeToSec(time2)
    else if (op === '-')
        totalSec = timeToSec(time1) - timeToSec(time2);
    totalSec = totalSec > 0 ? totalSec : 24 * 3600 + totalSec
    let res = `${Math.floor(totalSec / 3600 % 24)}:${Math.floor(totalSec / 60 % 60)}:${totalSec % 60}`;
    return res.split(':').map(num => num.length === 1 ? '0' + num : num).join(':')
}

function timeToSec(time) {
    return time.split(':').reduce((sum, num, i) => {
        if (i === 0) {
            return sum + Number(num) * 3600
        } else if (i === 1) {
            return sum + Number(num) * 60
        } else {
            return sum + Number(num)
        }
    }, 0)
}