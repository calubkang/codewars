function pickPeaks(arr) {
    let res = { pos: [], peaks: [] };
    let j;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            res.pos.push(i);
            res.peaks.push(arr[i])
        } else if (arr[i] === arr[i + 1] && arr[i] > arr[i - 1]) {
            j = i + 2;
            while (arr[j] === arr[i]) {
                j++;
            } if (arr[i] > arr[j]) {
                res.pos.push(i);
                res.peaks.push(arr[i])
            }
        }
    }
    return res
}