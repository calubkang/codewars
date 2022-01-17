function isPangram(string) {
    let chars = new Set();
    string.split(' ').join('').split('').forEach(char => {
        if (char.match(/[a-z]/i)) {
            chars.add(char)
        }
    })
    return chars.size >= 26
}