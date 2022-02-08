var findMissing = function (list) {
    for (let i = 0; i < list.length - 1; i++) {
        let first = list[i + 1] - list[i],
            second = list[i + 2] - list[i + 1];
        if (first !== second) {
            return first === second * 2 ? list[i] + second : list[i + 1] + first
        }
    }
}