function pyramid(n) {
    let res = [];
    if (n === 0) {
        return res
    }
    let temp = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            temp.push(1);
        }
        res.push(temp);
        temp = [];

    }
    return res;

}