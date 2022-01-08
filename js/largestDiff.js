var largestDifference = function (data) {

    let distances = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] - data[i] >= 0) {
                distances.push(j - i)
            }
        }
    }
    if (distances.length > 0) {
        return Math.max(...distances)
    } return 0
}