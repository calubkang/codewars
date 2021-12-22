function duplicateEncode(word) {
    let counts = {};
    word.toLowerCase().split('').forEach(char => counts[char] ? counts[char]++ : counts[char] = 1);
    return word.toLowerCase().split('').map(char => counts[char] > 1 ? ')' : '(').join('')
}