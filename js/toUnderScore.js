function toUnderscore(string) {
    if (typeof string === 'number') {
        return String(string)
    }
    return string.split('')
        .map((char, i) => (char.toUpperCase() === char && i !== 0 && char.match(/[a-z]/i)) ? "_" + char.toLowerCase() : char.toLowerCase())
        .join('')
}