function encode(text) {
    let arr = [];

    for (let i = 0; i < text.length; i++) {
        arr.push(text.charCodeAt(i));
    }

    return arr.map(num => ("00000000" + num.toString(2)).slice(-8))
        .map(bin => String(bin).split('').map(num => num.repeat(3)).join(''))
        .join('')

}

function decode(bits) {
    let arr = [];
    for (let i = 0; i < bits.length; i += 3) {
        let count = 0;
        let trip = bits.slice(i, i + 3);
        trip.split('').forEach(char => {
            if (char === '1') {
                count++
            }
        })
        count >= 2 ? arr.push('1') : arr.push('0')
    }
    let allBin = arr.join('')
    let charArr = [];
    for (let i = 0; i < allBin.length; i += 8) {
        let bin = allBin.slice(i, i + 8);
        charArr.push(String.fromCharCode(parseInt(bin, 2)))
    }
    return charArr.join('')
}