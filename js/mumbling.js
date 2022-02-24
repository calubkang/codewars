function accum(s) {
    return s.split('').map((char, i) => {
        let temp = '';
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                temp += char.toUpperCase()
            } else {
                temp += char.toLowerCase()
            }
        }
        return temp
    }).join('-')
}