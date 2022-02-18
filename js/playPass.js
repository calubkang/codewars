function playPass(s, n) {

    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', code;

    return s.split('').map((char, i) => {
        code = char.charCodeAt(0);
        if (code > 47 && code < 58) {
            return String(9 - Number(char))
        } else if (char.match(/[A-Z]/)) {
            return i % 2 === 0 ? alpha[(alpha.indexOf(char) + n) % 26] : alpha[(alpha.indexOf(char) + n) % 26].toLowerCase()
        } else {
            return char
        }
    }).reverse().join('')
}