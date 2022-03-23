var runLengthEncoding = function (str) {
    let res = [];
    let count = 0;
    str.split('').forEach((char, i, arr) => {
        if (i === 0) {
            count = 1
        } else if (char === arr[i - 1]) {
            count++;
            if (i === arr.length - 1) {
                res.push([count, char])
            }
        } else {
            res.push([count, arr[i - 1]]);
            count = 1;
            if (i === arr.length - 1) {
                res.push([count, char])
            }
        }
    })
    return res
}