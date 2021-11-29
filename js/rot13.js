function rot13(message) {
    let res = '';
    let lAlpha = 'abcdefghijklmnopqrstuvwxyz';
    let uAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    message.split('').forEach(char => {
        if (lAlpha.includes(char) || uAlpha.includes(char)) {
            char === char.toLowerCase() ? res += lAlpha[(lAlpha.indexOf(char) + 13) % 26] : res += uAlpha[(uAlpha.indexOf(char) + 13) % 26]
            //index = lAlpha.indexOf(char) : uAlpha.indexOf(char);
        } else {
            res += char
        }
    })
    return res
}