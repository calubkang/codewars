function alphanumeric(string) {
    return string.length > 0 && string.split('').every(char => char.match(/[a-zA-Z0-9]/i))
}