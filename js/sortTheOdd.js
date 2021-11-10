function sortArray(array) {
    let odds = [];
    array.forEach(num => {
        if (num % 2 !== 0) { odds.push(num) }
    })
    odds.sort((a, b) => a - b);
    array.forEach((num, i) => {
        if (num % 2 !== 0) {
            array[i] = odds.shift()
        }
    })
    return array
}