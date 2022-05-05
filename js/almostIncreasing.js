function almostIncreasingSequence(sequence) {
    //   check if first element in array is the odd one out
    if (sequence.slice(1) === sequence.slice(1).sort((a, b) => a - b)) {
        return true
    }

    //   
    let count = 0;
    for (let i = 0; i < sequence.length - 2; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            count += 1
            for (let j = i + 1; j < sequence.length; j++) {
                if (sequence[i - 1] >= sequence[j]) {
                    count += 1
                }
            }
        }
    }
    return count <= 1
}