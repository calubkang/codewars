function revrot(str, sz) {
    if (sz === 0 || str.length < sz) {
        return ""
    }
    let newStr = '';
    for (let i = 0; i < str.length; i += sz) {
        let currentStr = str.substr(i, sz)
        if (currentStr.length === sz) {
            if (currentStr.split('').reduce((sum, num) => sum + num ** 3, 0) % 2 === 0) {
                newStr += currentStr.split('').reverse().join('')
            } else {
                newStr += rotate(currentStr)
            }
        }
    }
    return newStr
}
let rotate = str => str.slice(1) + str[0];