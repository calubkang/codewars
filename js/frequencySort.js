function solve(arr) {
    let freq = {};
    arr.forEach(num => {
        freq[num] ? freq[num]++ : freq[num] = 1
    })
    return arr.sort((a, b) => {
        if (freq[a] === freq[b]) {
            return a - b
        }
        return freq[b] - freq[a]
    })
}