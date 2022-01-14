function duplicateCount(text) {
    let count = 0;
    let exists = {}
    text.toLowerCase().split('').forEach(char => exists[char] ? exists[char]++ : exists[char] = 1);
    for (const char in exists) {
        if (exists[char] > 1) {
            count++
        }
    }
    return count
}