function splitAndAdd(arr, n) {
    while (n > 0) {
        if (arr.length % 2) {
            let res = [];
            res.push(arr[Math.floor(arr.length / 2)])
            for (let i = 0; i < (arr.length - 1) / 2; i++) {
                res.push(arr[i] + arr[Math.ceil(arr.length / 2) + i])
            }
            arr = res;
            n--
        }

        else {
            let res = [];
            for (let i = 0; i < arr.length / 2; i++) {
                res.push(arr[i] + arr[arr.length / 2 + i])
            }
            arr = res;
            n--
        }
    }
    return arr
}