function toCamelCase(str) {
    return str.split(/[^A-Za-z]/).map((word, i) => i > 0 ? word[0].toUpperCase() + word.substring(1).toLowerCase() : word).join('')
}