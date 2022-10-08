function solve(arr) {

  // case for only one alarm
  if (arr.length === 1) {
    return '23:59'
  }
  let intervals = arr.sort().map((t, i, times) => {
    // disregard all duplicates
    if (t === times[i + 1]) {
      return '0'
    }

    // allowing for the interval to be calculated between today's last and tomorrow's first alarm
    let nextIndex = i < times.length - 1 ? i + 1 : 0;

    let [nextHH, nextMM] = times[nextIndex].split(':').map(t => Number(t));
    let [curHH, curMM] = t.split(':').map(t => Number(t));
    let passedMM = nextMM - curMM - 1;
    let passedHH = nextHH - curHH;
    if (passedMM < 0) {
      passedMM += 60;
      passedHH--
    }
    if (passedHH < 0) {
      passedHH += 24
    }
    if (passedMM < 10) {
      passedMM = `0${passedMM}`
    }
    if (passedHH < 10) {
      passedHH = `0${passedHH}`
    }
    return `${passedHH}:${passedMM}`
  })
  return intervals.sort()[intervals.length - 1]
}