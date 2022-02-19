function kebabize(str) {
    return str.split('')
        .filter(char => char.match(/[a-z]/i))
        .map((char, i) => char === char.toUpperCase() && i !== 0 ? `-${char.toLowerCase()}` : char.toLowerCase())
        .join('')
}