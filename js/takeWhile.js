function takeWhile(arr, pred) {
    let res = [];
    let endOfLoop = arr.length;
    for (let i = 0; i < endOfLoop; i++) {
        pred(arr[i]) ? res.push(arr[i]) : endOfLoop = i
    }
    return res
}