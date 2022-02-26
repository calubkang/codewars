function isIsogram(str) {
    let chars = new Set();
    str.toLowerCase().split('').forEach(char => {
        if (chars.has(char)) {
            return false
        } else {
            chars.add(char)
        }
    })
    return chars.size === str.length
}