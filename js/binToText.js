function binaryToString(binary) {
    let arr = []
    for (let i = 0; i < binary.length; i += 8) {
        arr.push(binary.substr(i, 8))
    }
    return arr.map(bin => String.fromCharCode(parseInt(bin, 2))).join('')
}