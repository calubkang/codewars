function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr.reduce((sum, ele) => sum + ele) === 0) { return 0 }
        let sumLeft = 0;
        for (let k = 0; k < i; k++) {
            sumLeft += arr[k]
        }
        let sumRight = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j]
        }
        if (sumLeft === sumRight) {
            return i
        }
    }
    return -1
}