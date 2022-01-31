function toWeirdCase(string) {
    return string.split(' ').map(word => {
        return word.split('')
            .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
            .join('')
    }).join(' ')
}