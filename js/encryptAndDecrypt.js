function encrypt(text, n) {
    if (text === null) {
        return null
    }
    while (n > 0) {
        const length = Math.floor(text.length / 2);
        const indices = {};
        text.split('').forEach((char, i) => indices[i] = char);
        let newStr = text.split('').map((char, i) => i >= length ? indices[(i - length) * 2] : indices[i * 2 + 1]).join('');
        return encrypt(newStr, n - 1)
    }
    return text
}

function decrypt(encryptedText, n) {
    if (encryptedText === null) {
        return null
    }
    while (n > 0) {
        const length = Math.floor(encryptedText.length / 2);
        const indices = {};
        encryptedText.split('').forEach((char, i) => indices[i] = char);
        let newStr = encryptedText.split('').map((char, i) => i % 2 === 0 ? indices[i / 2 + length] : indices[(i - 1) / 2]).join('');
        return decrypt(newStr, n - 1)
    }
    return encryptedText
}