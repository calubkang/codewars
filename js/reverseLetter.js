function reverseLetter(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            res = str[i] + res
        }
    }
    return res
}